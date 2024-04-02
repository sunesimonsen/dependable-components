import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
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

const menus = {
  root: [
    {
      value: "planets",
      label: "Planets",
      focus: "mercury",
      type: MenuItemNext,
    },
    {
      value: "dwarf-planets",
      label: "Dwarf Planets",
      focus: "pluto",
      type: MenuItemNext,
    },
    { value: "moons", label: "Moons", focus: "moon", type: MenuItemNext },
  ],
  planets: [
    {
      value: "root",
      focus: "planets",
      label: "Celestial Categories",
      type: MenuItemPrevious,
    },
    { value: "separator", type: "SelectSeparator" },
    { value: "mercury", label: "Mercury" },
    { value: "venus", label: "Venus" },
    { value: "earth", label: "Earth" },
    { value: "neptune", label: "Neptune" },
  ],
  "dwarf-planets": [
    {
      value: "root",
      focus: "dwarf-planets",
      label: "Celestial Categories",
      type: MenuItemPrevious,
    },
    { value: "separator", type: "SelectSeparator" },
    { value: "pluto", label: "Pluto" },
    { value: "eris", label: "Eris" },
  ],
  moons: [
    {
      value: "root",
      focus: "moons",
      label: "Celestial Categories",
      type: MenuItemPrevious,
    },
    { value: "separator", type: "SelectSeparator" },
    { value: "moon", label: "Moon (Earth)" },
    { value: "io", label: "Io (Jupiter)" },
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
        alert(`${key}: ${value.label}`);
      }
    };

    this.onClose = () => {
      this.menu("root");
    };

    this.menu = observable("root");
  }

  renderItems() {
    return menus[this.menu()].map(
      (item) => html`
        <${item.type || MenuItem} key=${item.value} value=${item}>
          ${item.label}
        <//>
      `,
    );
  }

  render() {
    const items = menus[this.menu()];

    return html`
      <${Center}>
        <${CustomMenu}
          model=${this.model}
          onSelect=${this.onSelect}
          onClose=${this.onClose}
        >
          <${MenuButton}>Go to space<//>
          <${MenuPopup}>${this.renderItems()}<//>
        <//>
      <//>
    `;
  }
}
