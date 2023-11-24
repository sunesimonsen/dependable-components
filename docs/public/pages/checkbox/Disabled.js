import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Checkbox} id="checkbox-disabled-default" />
          <label for="checkbox-disabled-default">Default</label>
          <${Checkbox} id="checkbox-disabled-checked" checked />
          <label for="checkbox-disabled-checked">Checked</label>
          <${Checkbox} id="checkbox-disabled-indeterminate" indeterminate />
          <label for="checkbox-disabled-indeterminate">Indeterminate</label>
        <//>
      <//>
    `;
  }
}
