import { html } from "@dependable/htm";
import { Validation } from "@dependable/components/Validation/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${Validation} type="info">This is an info hint<//>
          <${Validation} type="success">This is an success hint<//>
          <${Validation} type="warning">This is an warning hint<//>
          <${Validation} type="error">This is an error hint<//>
        <//>
      <//>
    `;
  }
}
