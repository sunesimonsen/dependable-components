import { html } from "@dependable/htm";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Switch } from "@dependable/components/Switch/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Switch} id="switch-default" />
          <label for="switch-default">Default</label>
          <${Switch} id="switch-checked" checked />
          <label for="switch-checked">Checked</label>
          <${Switch} id="switch-disabled" disabled />
          <label for="switch-disabled">Disabled</label>
          <${Switch} id="switch-checked-disabled" disabled checked />
          <label for="switch-checked-disabled">Disabled (checked)</label>
        <//>
      <//>
    `;
  }
}
