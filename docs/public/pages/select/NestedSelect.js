import { html, clone } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import {
  CustomSelect,
  SelectInput,
  SelectModel,
  SelectOption,
  SelectOptionNext,
  SelectOptionPrevious,
  SelectPopup,
  SelectSeparator,
} from "@dependable/components/Select/v0";

const id = "NestedSelect";

const containerStyles = css`
  & {
    padding-bottom: 160px;
  }
`;

const options = {
  root: [
    {
      value: "planets",
      label: "Planets",
      focus: "mercury",
      type: SelectOptionNext,
    },
    {
      value: "dwarf-planets",
      label: "Dwarf Planets",
      focus: "pluto",
      type: SelectOptionNext,
    },
    { value: "moons", label: "Moons", focus: "moon", type: SelectOptionNext },
  ],
  planets: [
    {
      value: "root",
      focus: "planets",
      label: "Celestial Categories",
      type: SelectOptionPrevious,
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
      type: SelectOptionPrevious,
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
      type: SelectOptionPrevious,
    },
    { value: "separator", type: "SelectSeparator" },
    { value: "moon", label: "Moon (Earth)" },
    { value: "io", label: "Io (Jupiter)" },
  ],
};

const menu = observable("root");
const selected = observable(options.root[0]);

export default class Example {
  constructor() {
    this.model = new SelectModel({
      id: "nested-select",
      selected: selected(),
    });

    this.onSelect = (e) => {
      const { key, value } = e.detail;
      const menuItems = options[key];

      if (menuItems) {
        menu(key);
        this.model.focused(value.focus ? { key: value.focus } : null);
        e.preventDefault();
      } else {
        selected(value);
      }
    };
  }

  renderOptions() {
    return options[menu()].map(
      (option) => html`
        <${option.type || SelectOption}
          selected=${option === selected()}
          key=${option.value}
          value=${option}
        >
          ${option.label}
        <//>
      `,
    );
  }

  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px">
          <label for="default-select">Select a celestial body</label>
          <${CustomSelect}
            model=${this.model}
            onSelect=${this.onSelect}
            placement="top-stretch"
          >
            <${SelectInput} .value=${selected().value}>${selected().label}<//>
            <${SelectPopup}>${this.renderOptions()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
