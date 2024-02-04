import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FilterInput } from "@dependable/components/FilterInput/v0";

const vegetables = [
  "Asparagus",
  "Brussel sprouts",
  "Cauliflower",
  "Garlic",
  "Jerusalem artichoke",
  "Kale",
  "Lettuce",
  "Onion",
  "Mushroom",
  "Potato",
  "Radish",
  "Spinach",
  "Tomato",
  "Yam",
  "Zucchini",
];

const value = observable("");

const onChange = (e) => {
  value(e.target.value);
};

const onClear = (e) => {
  value("");
};

const matches = computed(() =>
  vegetables.filter((v) => v.toLowerCase().includes(value().toLowerCase())),
);

export default class Example {
  renderItems() {
    if (matches().length === 0) {
      return html`<p>No matches</p>`;
    }

    return html`
      <ul>
        ${matches().map((v) => html`<li>${v}</li>`)}
      </ul>
    `;
  }

  render() {
    return html`
      <${ColumnLayout} columns="300px" justifyItems="start">
        <label for="filter-vegetable-brand">Filter</label>
        <${FilterInput}
          id="filter-vegetable-brand"
          placeholder="Filter vegetable"
          .value=${value()}
          onInput=${onChange}
          onClear=${onClear}
        />
        ${this.renderItems()}
      <//>
    `;
  }
}
