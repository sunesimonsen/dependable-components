import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteOption,
  AutocompletePopup,
} from "@dependable/components/Autocomplete/v0";

const id = "DefaultAutocomplete";

const options = [
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

const searchText = observable("");

const onInput = (e) => {
  searchText(e.target.value);
};

const onSelect = (e) => {
  if (e.detail) {
    const { value } = e.detail;
    searchText(value);
  } else {
    e.preventDefault();
  }
};

export default class Example {
  renderItems() {
    return options
      .filter((option) =>
        option.toLowerCase().includes(searchText().toLowerCase()),
      )
      .map(
        (option) => html`
          <${AutocompleteOption} key=${option} value=${option}>${option}<//>
        `,
      );
  }

  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px">
          <label for="default-autocomplete">Find a vegetable</label>
          <${Autocomplete} id="default-autocomplete" onSelect=${onSelect}>
            <${AutocompleteInput} .value=${searchText()} onInput=${onInput} />
            <${AutocompletePopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
