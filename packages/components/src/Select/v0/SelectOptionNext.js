import { html } from "@dependable/htm";
import { MenuItemNext } from "../../Menu/v0/MenuItemNext.js";

export class SelectOptionNext {
  static isSelectable = true;

  render({ children, ...other }) {
    return html`<${MenuItemNext} role="options" ...${other}>${children}<//>`;
  }
}
