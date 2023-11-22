const { join } = require("path");
const fs = require("fs").promises;
const { capitalCase } = require("change-case");
const {
  extend,
  forEach,
  groupBy,
  map,
  program,
  sortBy,
  splitIterable,
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

const keyToPageName = (key) =>
  "icons-" + key.replace(/[()]/g, "").replace(" ", "-");

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
      dir: dest,
      size,
      style,
      name,
      path: join(dest, `${name}.js`),
      data,
    };
  }),
  forEach(({ dir }) => fs.mkdir(dir, { recursive: true })),
  writeTemplate(join(__dirname, "SvgComponent.ejs"), ({ path }) => path),
  tap("path"),
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
