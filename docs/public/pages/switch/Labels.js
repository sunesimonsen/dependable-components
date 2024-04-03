import { html } from "@dependable/htm";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Switch } from "@dependable/components/Switch/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Switch} id="labels-switch-default" />
          <label for="labels-switch-default">Default</label>
          <${Switch} id="labels-switch-checked" checked />
          <label for="labels-switch-checked">Checked</label>
          <${Switch} id="labels-switch-disabled" disabled />
          <label for="labels-switch-disabled">Disabled</label>
          <${Switch} id="labels-switch-checked-disabled" disabled checked />
          <label for="labels-switch-checked-disabled">Disabled (checked)</label>
        <//>
      <//>
    `;
  }
}
