import { MenuModel } from "../../Menu/v0/MenuModel.js";

export class SelectModel extends MenuModel {
  showMenu(selectables) {
    if (!this.visible()) {
      this.visible(true);

      const selectedOption = selectables.find(({ selected }) => selected);

      this.focused(selectedOption);
    }
  }
}
