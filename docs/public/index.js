import "@dependable/vite";
import { html } from "@dependable/htm";
import { styleguide, PageReference } from "@dependable/styleguide";
import { IconNavigation, iconPageMap } from "./icons-navigation.js";
import { importmap } from "./importmap.js";

const pages = [
  "anchor",
  "autocomplete",
  "bar",
  "borderlayout",
  "button",
  "center",
  "checkbox",
  "columnlayout",
  "default-theme",
  "dialog",
  "errorboundary",
  "iconbutton",
  "icons",
  "index",
  "menu",
  "notifications",
  "popup",
  "pulse",
  "purple-theme",
  "select",
  "sidebar",
  "skeleton",
  "spinner",
  "switch",
  "tags",
  "textinput",
  "toolbarlayout",
];

const pageLoaders = Object.fromEntries(
  pages.map((id) => [id, () => import(`./pages/${id}/index.js`)]),
);

styleguide({
  logo: new URL("./images/logo.png", import.meta.url).toString(),
  title: "DEPENDABLE",
  importmap,
  repository: "https://github.com/sunesimonsen/dependable-components",
  navigation: html`
    <h1>Buttons</h1>
    <ul>
      <li><${PageReference} id="anchor">Anchor<//></li>
      <li><${PageReference} id="button">Button<//></li>
      <li><${PageReference} id="iconbutton">Icon button<//></li>
    </ul>
    <h1>Inputs</h1>
    <ul>
      <li><${PageReference} id="autocomplete">Autocomplete<//></li>
      <li><${PageReference} id="checkbox">Checkbox<//></li>
      <li><${PageReference} id="switch">Switch<//></li>
      <li><${PageReference} id="select">Select<//></li>
      <li><${PageReference} id="textinput">Text input<//></li>
    </ul>
    <h1>Popups</h1>
    <ul>
      <li><${PageReference} id="dialog">Dialog<//></li>
      <li><${PageReference} id="menu">Menu<//></li>
      <li><${PageReference} id="popup">Popup<//></li>
    </ul>
    <h1>Data</h1>
    <ul>
      <li><${PageReference} id="tags">Tags<//></li>
    </ul>
    <h1>Loaders</h1>
    <ul>
      <li><${PageReference} id="pulse">Pulse<//></li>
      <li><${PageReference} id="skeleton">Skeleton<//></li>
      <li><${PageReference} id="spinner">Spinner<//></li>
    </ul>
    <h1>Callouts</h1>
    <ul>
      <li><${PageReference} id="notifications">Notifications<//></li>
    </ul>
    <h1>Layouts</h1>
    <ul>
      <li><${PageReference} id="bar">Bar<//></li>
      <li><${PageReference} id="sidebar">Sidebar<//></li>
      <li><${PageReference} id="toolbarlayout">Toolbar layout<//></li>
      <li><${PageReference} id="borderlayout">Border layout<//></li>
      <li><${PageReference} id="center">Center<//></li>
      <li><${PageReference} id="columnlayout">Column layout<//></li>
    </ul>
    <h1>Error handling</h1>
    <ul>
      <li><${PageReference} id="errorboundary">Error boundary<//></li>
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
    </ul>
  `,
  pageLoaders: { ...pageLoaders, ...iconPageMap },
});
