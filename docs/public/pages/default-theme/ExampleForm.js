import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { TextInput } from "@dependable/components/TextInput/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="1" justifyItems="left">
        <h3>Example form</h3>
        <label for="first-name">First name:</label>
        <${TextInput} id="first-name" placeholder="First name" />
        <label for="last-name">Last name:</label>
        <${TextInput} id="last-name" placeholder="Last name" />
        <${Button}>Submit<//>
      <//>
    `;
  }
}
