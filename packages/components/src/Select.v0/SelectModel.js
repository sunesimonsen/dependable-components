import { MenuModel } from "../Menu.v0/MenuModel.js";
import { observable } from "@dependable/state";

export class SelectModel extends MenuModel {
  constructor({ id, selected }) {
    super({ id });

    this.selected = observable(selected);
  }

  showMenu() {
    if (!this.visible()) {
      this.visible(true);
      this.focused(this.selected());
    }
  }
}
