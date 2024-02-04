import { html } from "@dependable/view";
import { flush } from "@dependable/state";
import { CustomMenu } from "../../Menu/v0/Menu.js";
import { AutocompleteModel } from "./AutocompleteModel.js";
import { findSelectables } from "../../Menu/v0/children.js";

export class CustomAutocomplete {
  constructor() {
    this.onClick = (e) => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      e.preventDefault();
    };

    this.showMenu = () => {
      this.props.model.showMenu([]);
    };

    this.onKeyDown = (e) => {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }

      if (!e.defaultPrevented) {
        if (e.key === "Backspace") {
          this.showMenu();
        }

        if (
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          65 < e.keyCode &&
          e.keyCode < 222
        ) {
          this.showMenu();
        }
      }
    };
  }

  didUpdate() {
    if (this.props.model.visible()) {
      const selectables = this.getSelectables();
      const selectablesCount = selectables.length;
      if (this.prevSelectablesCount !== selectablesCount) {
        this.props.model.focusFirst(selectables);
      }

      this.prevSelectablesCount = selectablesCount;
    }
  }

  getSelectables() {
    return findSelectables(this.props.children);
  }

  render({ model, children, ...other }) {
    return html`
      <${CustomMenu}
        model=${model}
        placement="bottom-stretch"
        role="combobox"
        ...${other}
        onFocus=${this.onFocus}
        onClick=${this.onClick}
        onKeyDown=${this.onKeyDown}
      >
        ${children}
      <//>
    `;
  }
}

let nextId = 0;

export class Autocomplete {
  constructor({ id }) {
    this.model = new AutocompleteModel({ id: id || `select-${nextId++}` });
  }

  render({ children, ...other }) {
    return html`
      <${CustomAutocomplete} model=${this.model} ...${other}>${children}<//>
    `;
  }
}
