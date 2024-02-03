import { html } from "@dependable/view";
import { MenuItem } from "../../Menu/v0/MenuItem.js";
import { css } from "stylewars";

export class AutocompleteOption {
  static isSelectable = true;

  render({ children, ...other }) {
    return html`<${MenuItem} role="option" ...${other}>${children}<//>`;
  }
}
