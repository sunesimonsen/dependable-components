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
    { key: "orange", label: "Orange" },
    { key: "berry", label: "Berry", type: SelectOptionNext },
    { key: "apple", label: "Apple" },
  ],
  berry: [
    {
      key: "root",
      focus: "berry",
      label: "Fruits",
      type: SelectOptionPrevious,
    },
    { key: "strawberry", label: "Strawberry" },
    { key: "loganberry", label: "Loganberry" },
    { key: "boysenberry", label: "Boysenberry" },
  ],
};

const menu = observable("root");

export default class Example {
  constructor() {
    this.model = new SelectModel({
      id: "nested-select",
      selected: options.root[0],
    });

    this.onSelect = (e) => {
      const { key, value } = e.detail;
      const menuItems = options[key];

      if (menuItems) {
        menu(key);
        const focused = value.focus ? { key: value.focus, value } : null;
        this.model.focused(focused);
        e.preventDefault();
      } else {
        this.model.selected(value);
      }
    };
  }

  renderItems() {
    const selected = this.model.selected();

    return options[menu()].map(
      (option) => html`
        <${option.type || SelectOption}
          selected=${option === selected}
          key=${option.key}
          value=${option}
        >
          ${option.label}
        <//>
      `,
    );
  }

  render() {
    const items = options[menu()];
    const selected = this.model.selected();

    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px">
          <label for="default-select">Brand</label>
          <${CustomSelect}
            model=${this.model}
            onSelect=${this.onSelect}
            placement="top-stretch"
          >
            <${SelectInput} .value=${selected.label}>${selected.label}<//>
            <${SelectPopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
