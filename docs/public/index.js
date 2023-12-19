import { html, render } from "@dependable/view";
import { styleguide, PageReference } from "@dependable/styleguide";
import { IconNavigation, iconPageMap } from "./icons-navigation.js";

const pages = [
  "anchor",
  "borderlayout",
  "button",
  "center",
  "checkbox",
  "columnlayout",
  "iconbutton",
  "icons",
  "index",
  "menu",
  "popup",
  "pulse",
  "select",
  "skeleton",
  "spinner",
  "switch",
  "textinput",
  "default-theme",
  "purple-theme",
  "green-theme",
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
      <li><${PageReference} id="iconbutton">Icon button<//></li>
    </ul>
    <h1>Inputs</h1>
    <ul>
      <li><${PageReference} id="checkbox">Checkbox<//></li>
      <li><${PageReference} id="switch">Switch<//></li>
      <li><${PageReference} id="select">Select<//></li>
      <li><${PageReference} id="textinput">Text input<//></li>
    </ul>
    <h1>Popups</h1>
    <ul>
      <li><${PageReference} id="menu">Menu<//></li>
      <li><${PageReference} id="popup">Popup<//></li>
    </ul>
    <h1>Loaders</h1>
    <ul>
      <li><${PageReference} id="pulse">Pulse<//></li>
      <li><${PageReference} id="skeleton">Skeleton<//></li>
      <li><${PageReference} id="spinner">Spinner<//></li>
    </ul>
    <h1>Layouts</h1>
    <ul>
      <li><${PageReference} id="borderlayout">Border layout<//></li>
      <li><${PageReference} id="center">Center<//></li>
      <li><${PageReference} id="columnlayout">Column layout<//></li>
    </ul>
    <h1>Icons</h1>
    <ul>
      <li><${PageReference} id="icons">Icons<//></li>
      <${IconNavigation} />
    </ul>
    <h1>Theming</h1>
    <ul>
      <li><${PageReference} id="default-theme">Default theme<//></li>
      <li><${PageReference} id="purple-theme">Purple theme<//></li>
      <li><${PageReference} id="green-theme">Green theme<//></li>
    </ul>
  `,
  pageMap: { ...pageMap, ...iconPageMap },
});
