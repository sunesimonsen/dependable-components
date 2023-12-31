import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const id = "DisabledSelect";

const options = [
  { label: "Ford", value: "ford" },
  { label: "Kia", value: "kia" },
  { label: "Mazda", value: "mazda" },
  { label: "Skoda", value: "skoda" },
];

const selected = observable(options[0]);

export default class Example {
  constructor() {
    this.onSelect = (e) => {
      const { value } = e.detail;
      selected(value);
    };
  }

  renderItems() {
    return options.map(
      (option) => html`
        <${SelectOption}
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
          <label for="disabled-select">Brand</label>
          <${Select} id="disabled-select" onSelect=${this.onSelect}>
            <${SelectInput} disabled .value=${selected().value}>
              ${selected().label}
            <//>
            <${SelectPopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
