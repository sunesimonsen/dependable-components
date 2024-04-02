import { html } from "@dependable/htm";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} alignItems="end" columns="150px auto 150px auto">
          Click this button
          <${Button}>Button<//>
          Click this button
          <${Button}>Button<//>
          Click this button
          <${Button}>Button<//>
          Click this button
          <${Button}>Button<//>
        <//>
      <//>
    `;
  }
}
