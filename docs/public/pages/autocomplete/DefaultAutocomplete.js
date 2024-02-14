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
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto (Dwarf Planet)",
  "Eris (Dwarf Planet)",
  "Makemake (Dwarf Planet)",
  "Haumea (Dwarf Planet)",
  "Ceres (Dwarf Planet)",
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
          <label for="default-autocomplete">Planet</label>
          <${Autocomplete} id="default-autocomplete" onSelect=${onSelect}>
            <${AutocompleteInput} .value=${searchText()} onInput=${onInput} />
            <${AutocompletePopup}>${this.renderItems()}<//>
          <//>
        <//>
      <//>
    `;
  }
}
