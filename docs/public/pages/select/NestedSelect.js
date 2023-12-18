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
    { value: "orange", label: "Orange" },
    {
      value: "berry",
      label: "Berry",
      focus: "strawberry",
      type: SelectOptionNext,
    },
    { value: "apple", label: "Apple" },
  ],
  berry: [
    {
      value: "root",
      focus: "berry",
      label: "Fruits",
      type: SelectOptionPrevious,
    },
    { value: "separator", type: SelectSeparator },
    { value: "strawberry", label: "Strawberry" },
    { value: "loganberry", label: "Loganberry" },
    { value: "boysenberry", label: "Boysenberry" },
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

  renderItems() {
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
    const items = options[menu()];

    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px">
          <label for="default-select">Brand</label>
          <${CustomSelect}
            model=${this.model}
            onSelect=${this.onSelect}
            placement="top-stretch"
          >
            <${SelectInput} .value=${selected().value}>${selected().label}<//>
            <${SelectPopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
