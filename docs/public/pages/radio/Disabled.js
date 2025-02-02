import { html } from "@dependable/htm";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Radio } from "@dependable/components/Radio/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
        <${Radio} disabled id="checkbox-disabled-default" />
        <label for="checkbox-disabled-default">Default</label>
        <${Radio} disabled id="checkbox-disabled-checked" checked />
        <label for="checkbox-disabled-checked">Checked</label>
      <//>
    `;
  }
}
