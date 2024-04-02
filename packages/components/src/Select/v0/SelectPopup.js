import { h } from "@dependable/view";
import { MenuPopup } from "../../Menu/v0/MenuPopup.js";

export class SelectPopup {
  render({ children, ...other }) {
    return h(MenuPopup, { role: "listbox", ...other }, children);
  }
}
