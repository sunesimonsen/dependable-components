import { html } from "@dependable/htm";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
        <${Checkbox} disabled id="checkbox-disabled-default" />
        <label for="checkbox-disabled-default">Default</label>
        <${Checkbox} disabled id="checkbox-disabled-checked" checked />
        <label for="checkbox-disabled-checked">Checked</label>
        <${Checkbox}
          disabled
          id="checkbox-disabled-indeterminate"
          indeterminate
        />
        <label for="checkbox-disabled-indeterminate">Indeterminate</label>
      <//>
    `;
  }
}
