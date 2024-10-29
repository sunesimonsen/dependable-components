import { html } from "@dependable/htm";

import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { HtmlFileInput } from "@dependable/components/HtmlFileInput/v0";
import { Validation } from "@dependable/components/Validation/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${FieldLayout} width="400px">
            <label for="validation-success">Planet picture</label>
            <${HtmlFileInput} id="validation-success" validation="success" />
            <${Validation} type="success"
              >This looks like the perfect picture.<//
            >
          <//>
          <${FieldLayout} width="400px">
            <label for="validation-warning">Planet picture</label>
            <${HtmlFileInput} id="validation-warning" validation="warning" />
            <${Validation} type="warning">
              The picture dimensions should be a perfect square.
            <//>
          <//>
          <${FieldLayout} width="400px">
            <label for="validation-error">Planet picture</label>
            <${HtmlFileInput} id="validation-error" validation="error" />
            <${Validation} type="error"> The picture has to be selected. <//>
          <//>
        <//>
      <//>
    `;
  }
}
