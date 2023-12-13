import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import {
  CustomMenu,
  MenuButton,
  MenuItem,
  MenuItemNext,
  MenuItemPrevious,
  MenuModel,
  MenuPopup,
  MenuSeparator,
} from "@dependable/components/Menu/v0";

const containerStyles = css`
  & {
    text-align: center;
    padding: 60px 0;
  }
`;

const menus = {
  root: [
    html`<${MenuItem} key="orange" value=${0}>Orange<//>`,
    html`<${MenuItemNext} key="berry">Barry<//>`,
    html`<${MenuItem} key="apple" value=${1}>Apple<//>`,
  ],
  berry: [
    html`<${MenuItemPrevious} key="root" value="berry">Fruits<//>`,
    html`<${MenuSeparator} key="separator" />`,
    html`<${MenuItem} key="strawberry" value=${2}>Strawberry<//>`,
    html`<${MenuItem} key="loganberry" value=${3}>Loganberry<//>`,
    html`<${MenuItem} key="boysenberry" value=${4}> Boysenberry <//>`,
  ],
};

export default class Example {
  constructor() {
    this.model = new MenuModel({ id: "nested-menu" });

    this.onSelect = (e) => {
      const { key, value } = e.detail;
      const menu = menus[key];

      if (menu) {
        this.menu(key);
        this.model.focused({ key: value });
        e.preventDefault();
      } else {
        alert(`${key}:${value}`);
      }
    };

    this.onClose = () => {
      this.menu("root");
    };

    this.menu = observable("root");
  }

  render() {
    const items = menus[this.menu()];

    return html`
      <div className=${containerStyles}>
        <${CustomMenu}
          model=${this.model}
          onSelect=${this.onSelect}
          onClose=${this.onClose}
          placement="end"
        >
          <${MenuButton}>Options<//>
          <${MenuPopup}>${items}<//>
        <//>
      </div>
    `;
  }
}
