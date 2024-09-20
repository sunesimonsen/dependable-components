import { html } from "@dependable/htm";
import { observable, computed } from "@dependable/state";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { FilterInput } from "@dependable/components/FilterInput/v0";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const value = observable("");

const onChange = (e) => {
  value(e.target.value);
};

const onClear = (e) => {
  value("");
};

const matches = computed(() =>
  planets.filter((v) => v.toLowerCase().includes(value().toLowerCase())),
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
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${FieldLayout} width="300px">
            <label for="filter-planets">Filter planets</label>
            <${FilterInput}
              id="filter-planets"
              placeholder="Filter planet"
              .value=${value()}
              onInput=${onChange}
              onClear=${onClear}
            />
          <//>
          ${this.renderItems()}
        <//>
      <//>
    `;
  }
}
