import { html } from "@dependable/htm";
import { SelectOption } from "../../Select/v0/SelectOption.js";
import { css } from "stylewars";

export class AutocompleteOption {
  static isSelectable = true;

  render({ children, ...other }) {
    return html`<${SelectOption} ...${other}>${children}<//>`;
  }
}
