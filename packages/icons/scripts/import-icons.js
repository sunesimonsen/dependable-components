const { join } = require("path");
const fs = require("fs").promises;
const { capitalCase } = require("change-case");
const { XMLParser } = require("fast-xml-parser");
const {
  extend,
  forEach,
  groupBy,
  map,
  filter,
  fork,
  program,
  sortBy,
  transform,
  tap,
  toArray,
} = require("@transformation/core");
const { glob } = require("@transformation/glob");
const { readEachFile } = require("@transformation/file");
const { writeTemplate } = require("@transformation/ejs");

const rootDir = join(__dirname, "..", "..", "..");
const source = join(
  rootDir,
  "node_modules",
  "@zendeskgarden",
  "svg-icons",
  "src",
);

const dest = "./src";
fs.mkdir("./src", { recursive: true });

const keyToPageName = (key) =>
  "icons-" + key.replace(/[()]/g, "").replace(" ", "-");

const xmlParser = new XMLParser({
  ignoreAttributes: false,
});

const svgToVDom = (name, node) => {
  if (Array.isArray(node)) {
    return node.map((instance) => svgToVDom(name, instance)).join(",");
  }

  const children = [];
  const attributes = {};

  for (const key of Object.keys(node)) {
    if (key.startsWith("@_")) {
      attributes[key.slice(2)] = node[key];
    } else {
      children.push(svgToVDom(key, node[key]));
    }
  }

  const attributeString =
    "{" +
    Object.entries(attributes)
      .map(
        ([name, value]) => JSON.stringify(name) + ":" + JSON.stringify(value),
      )
      .join(",") +
    "}";

  return (
    "h(" + [JSON.stringify(name), attributeString, ...children].join(",") + ")"
  );
};

const svgToVDomTransformation = map((svg) => {
  const tree = xmlParser.parse(svg);
  return svgToVDom("svg", tree.svg);
});

program(
  glob({
    cwd: source,
    pattern: "*/*.svg",
    onlyFiles: false,
    absolute: true,
  }),
  readEachFile("utf8"),
  map(({ path, data }) => {
    const [size, fileName] = path.split("/").slice(-2);

    const name = capitalCase(fileName.replace(/\.svg$/, size + "Icon"))
      .replace(/ /g, "")
      .replace(/^\d/, "I$&");

    let style = "default";

    if (fileName.endsWith("-stroke.svg")) {
      style = "default";
    } else if (fileName.endsWith("-fill.svg")) {
      style = "fill";
    } else if (fileName.startsWith("wordmark-")) {
      style = "wordmark";
    }

    return {
      size,
      style,
      name,
      path,
      data,
    };
  }),
  tap("name"),
  filter(({ data }) => Boolean(data)),
  fork(
    transform({
      data: svgToVDomTransformation,
    }),
    writeTemplate(join(__dirname, "SvgComponent.ejs"), ({ name }) =>
      join(dest, `${name}.js`),
    ),
  ),
  tap("name"),
  groupBy(({ size, style }) =>
    style === "default" ? `${size}px` : `${size}px (${style})`,
  ),
  sortBy("key"),
  extend({
    page: map(({ key }) => keyToPageName(key)),
  }),
  forEach(({ page }) =>
    fs.mkdir(join(rootDir, "docs", "public", "pages", page), {
      recursive: true,
    }),
  ),
  writeTemplate(join(__dirname, "IconSheet.ejs"), ({ page }) =>
    join(rootDir, "docs", "public", "pages", page, "index.js"),
  ),
  toArray(),
  writeTemplate(join(__dirname, "IconNavigation.ejs"), ({ key }) =>
    join(rootDir, "docs", "public", "icons-navigation.js"),
  ),
);
