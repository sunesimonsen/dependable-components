#!/usr/bin/env node

const main = async () => {
  const fs = require("fs").promises;

  const packageJson = JSON.parse(await fs.readFile("./package.json"));
  const dependencies = packageJson.dependencies;

  const packageNames = [
    "stylewars",
    "@dependable/view",
    "@dependable/state",
    "@dependable/icons",
    "@dependable/components",
  ];

  const versions = Object.fromEntries(
    Object.entries(dependencies).filter(([name]) =>
      packageNames.includes(name),
    ),
  );

  const importmap = {
    imports: {
      stylewars: `https://unpkg.com/stylewars@${versions.stylewars}/dist/bundle.esm.js`,
      "@dependable/state": `https://unpkg.com/@dependable/state@${versions["@dependable/state"]}/dist/dependable-state.esm.js`,
      "@dependable/view": `https://unpkg.com/@dependable/view@${versions["@dependable/view"]}/dist/dependable-view-index.esm.js`,
      "@dependable/components/": `https://unpkg.com/@dependable/components@latest/src/`,
      "@dependable/icons/": `https://unpkg.com/@dependable/icons@latest/src/`,
    },
  };

  const content = `\
export const importmap = \`${JSON.stringify(importmap, null, 2)}\`;`;

  console.log(content);
};

main();
