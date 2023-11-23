import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="3">
          <${Button}>Default<//>
          <${Button} primary>Basic<//>
          <${Button} basic>Basic<//>
        <//>
      <//>
    `;
  }
}
