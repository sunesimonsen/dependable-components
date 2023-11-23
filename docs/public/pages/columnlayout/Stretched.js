import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} stretched columns="2">
        <${Button}>Button<//>
        <${Button}>Button<//>
        <${Button}>Button<//>
        <${Button}>Button<//>
      <//>
    `;
  }
}
