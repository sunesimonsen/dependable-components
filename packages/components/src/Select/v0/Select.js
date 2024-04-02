import { h } from "@dependable/view";
import { CustomMenu } from "../../Menu/v0/Menu.js";
import { SelectModel } from "./SelectModel.js";

export class CustomSelect {
  render({ model, children, ...other }) {
    return h(
      CustomMenu,
      {
        model: model,
        placement: "bottom-stretch",
        role: "combobox",
        ...other,
      },
      children,
    );
  }
}

let nextId = 0;

export class Select {
  constructor({ id }) {
    this.model = new SelectModel({ id: id || `select-${nextId++}` });
  }

  render({ children, ...other }) {
    return h(CustomSelect, { model: this.model, ...other }, children);
  }
}
