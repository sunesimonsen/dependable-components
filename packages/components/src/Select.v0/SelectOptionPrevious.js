import { html } from "@dependable/view";
import { MenuItemPrevious } from "../Menu.v0/MenuItemPrevious.js";

export class SelectOptionPrevious {
  static isSelectable = true;

  render({ children, ...other }) {
    return html`
      <${MenuItemPrevious} role="options" ...${other}>${children}<//>
    `;
  }
}
