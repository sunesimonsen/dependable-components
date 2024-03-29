import { html } from "@dependable/view";
import { MenuPopup } from "../../Menu/v0/MenuPopup.js";

export class AutocompletePopup {
  render({ children, ...other }) {
    return html`<${MenuPopup} role="listbox" ...${other}>${children}<//> `;
  }
}
