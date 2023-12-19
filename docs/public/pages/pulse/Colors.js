import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Pulse } from "@dependable/components/Pulse/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="3" stretched>
        <div style="color: red"><${Pulse} /></div>
        <div style="color: blue"><${Pulse} /></div>
        <div style="color: green"><${Pulse} /></div>
      <//>
    `;
  }
}
