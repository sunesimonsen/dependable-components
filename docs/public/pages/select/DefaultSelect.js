import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const id = "DefaultSelect";

const options = [
  { label: "Mercury", value: "mercury" },
  { label: "Venus", value: "venus" },
  { label: "Earth", value: "earth" },
  { label: "Mars", value: "mars" },
  { label: "Jupiter", value: "jupiter" },
  { label: "Saturn", value: "saturn" },
  { label: "Uranus", value: "uranus" },
  { label: "Neptune", value: "neptune" },
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
          <label for="default-select">Select a planet</label>
          <${Select} id="default-select" onSelect=${this.onSelect}>
            <${SelectInput} .value=${selected().value}>${selected().label}<//>
            <${SelectPopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
