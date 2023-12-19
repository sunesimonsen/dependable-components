import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Pulse } from "@dependable/components/Pulse/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="3" stretched>
        <div style="font-size: 12px"><${Pulse} /></div>
        <div><${Pulse} /></div>
        <div style="font-size: 24px"><${Pulse} /></div>
      <//>
    `;
  }
}
