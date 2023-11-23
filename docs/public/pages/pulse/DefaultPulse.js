import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { Pulse } from "@dependable/components/Pulse/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Pulse} />
      <//>
    `;
  }
}
