import { html } from "@dependable/view";
import { Anchor } from "@dependable/components/Anchor/v0";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Anchor} href="./button">Show button documentation<//>
      <//>
    `;
  }
}
