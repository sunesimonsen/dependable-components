import { html, render } from "@dependable/view";
import { styleguide, PageReference } from "@dependable/styleguide";
import { IconNavigation, iconPageMap } from "./icons-navigation.js";

const pages = [
  "anchor",
  "borderlayout",
  "button",
  "center",
  "columnlayout",
  "iconbutton",
  "icons",
  "index",
  "pulse",
  "skeleton",
  "spinner",
];

const pageMap = Object.fromEntries(
  pages.map((id) => [id, () => import(`./pages/${id}/index.js`)]),
);

styleguide({
  logo: new URL("./images/logo.png", import.meta.url).toString(),
  title: "DEPENDABLE",
  navigation: html`
    <h1>Buttons</h1>
    <ul>
      <li><${PageReference} id="anchor">Anchor<//></li>
      <li><${PageReference} id="button">Button<//></li>
      <li><${PageReference} id="iconbutton">IconButton<//></li>
    </ul>
    <h1>Loaders</h1>
    <ul>
      <li><${PageReference} id="skeleton">Skeleton<//></li>
      <li><${PageReference} id="spinner">Spinner<//></li>
      <li><${PageReference} id="pulse">Pulse<//></li>
    </ul>
    <h1>Layouts</h1>
    <ul>
      <li><${PageReference} id="center">Center<//></li>
      <li><${PageReference} id="columnlayout">ColumnLayout<//></li>
      <li><${PageReference} id="borderlayout">BorderLayout<//></li>
    </ul>
    <h1>Icons</h1>
    <ul>
      <li><${PageReference} id="icons">Icons<//></li>
      <${IconNavigation} />
    </ul>
  `,
  pageMap: { ...pageMap, ...iconPageMap },
});
