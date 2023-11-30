import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import DefaultMenu from "./DefaultMenu.js";

class MenuPage {
  render() {
    return html`
      <${Title}>Menu<//>
      <${SubTitle}>
        Menus help users invoke a single action from a list of available
        options.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Works in combination with a Trigger to display a list of menu items.
      </p>
      <${Example} src=${new URL("./DefaultMenu.js", import.meta.url)}>
        <${DefaultMenu} />
      <//>
    `;
  }
}

export default MenuPage;
