import { render } from "@dependable/view";
import { html } from "@dependable/htm";
import { PageReference } from "@dependable/styleguide";

export const iconPageMap = {
  "icons-12px": () => import(`./pages/icons-12px/index.js`),
  "icons-12px-fill": () => import(`./pages/icons-12px-fill/index.js`),
  "icons-16px": () => import(`./pages/icons-16px/index.js`),
  "icons-16px-fill": () => import(`./pages/icons-16px-fill/index.js`),
  "icons-26px": () => import(`./pages/icons-26px/index.js`),
  "icons-26px-fill": () => import(`./pages/icons-26px-fill/index.js`),
  "icons-26px-wordmark": () => import(`./pages/icons-26px-wordmark/index.js`),
};

export class IconNavigation {
  render() {
    return html`
      <li><${PageReference} id="icons-12px">12px<//></li>
      <li><${PageReference} id="icons-12px-fill">12px (fill)<//></li>
      <li><${PageReference} id="icons-16px">16px<//></li>
      <li><${PageReference} id="icons-16px-fill">16px (fill)<//></li>
      <li><${PageReference} id="icons-26px">26px<//></li>
      <li><${PageReference} id="icons-26px-fill">26px (fill)<//></li>
      <li><${PageReference} id="icons-26px-wordmark">26px (wordmark)<//></li>
    `;
  }
}
