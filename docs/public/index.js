import { html, render } from "@dependable/view";
import { styleguide, PageReference } from "@dependable/styleguide";
import { IconNavigation, iconPageMap } from "./icons-navigation.js";

const pages = ["index", "anchor", "button", "icons"];

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
    </ul>
    <h1>Icons</h1>
    <ul>
      <li><${PageReference} id="icons">Icons<//></li>
      <${IconNavigation} />
    </ul>
  `,
  pageMap: { ...pageMap, ...iconPageMap },
});
