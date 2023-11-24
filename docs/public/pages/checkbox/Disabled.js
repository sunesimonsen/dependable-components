import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Checkbox} id="checkbox-default" />
          <label for="checkbox-default">Default</label>
          <${Checkbox} id="checkbox-checked" checked />
          <label for="checkbox-checked">Checked</label>
          <${Checkbox} id="checkbox-indeterminate" indeterminate />
          <label for="checkbox-indeterminate">Indeterminate</label>
        <//>
      <//>
    `;
  }
}
