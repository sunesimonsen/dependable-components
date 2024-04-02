import { h } from "@dependable/view";
import { MenuItemPrevious } from "../../Menu/v0/MenuItemPrevious.js";

export class SelectOptionPrevious {
  static isSelectable = true;

  render({ children, ...other }) {
    return h(MenuItemPrevious, { role: "options", ...other }, children);
  }
}
