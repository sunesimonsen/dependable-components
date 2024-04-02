import { h } from "@dependable/view";
import { MenuItemNext } from "../../Menu/v0/MenuItemNext.js";

export class SelectOptionNext {
  static isSelectable = true;

  render({ children, ...other }) {
    return h(MenuItemNext, { role: "options", ...other }, children);
  }
}
