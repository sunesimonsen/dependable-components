import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { SearchInput } from "@dependable/components/SearchInput/v0";

const value = observable("Ford Focus");

const onChange = (e) => {
  value(e.target.value);
};

const onClear = (e) => {
  value("");
};

const onSubmit = () => {
  alert(`Current value: ${value()}`);
};

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px auto">
          <label for="search-car-brand">Find brand</label>
          <${SearchInput}
            id="search-car-brand"
            .value=${value()}
            onInput=${onChange}
            onClear=${onClear}
          />
          <${Button} onClick=${onSubmit}>Search<//>
        <//>
      <//>
    `;
  }
}
