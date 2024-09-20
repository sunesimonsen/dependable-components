import { html } from "@dependable/htm";

import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { TextInput } from "@dependable/components/TextInput/v0";
import { Validation } from "@dependable/components/Validation/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${FieldLayout} width="300px">
            <label for="validation-success">Planet name</label>
            <${TextInput}
              id="validation-success"
              type="text"
              value="Mercury"
              validation="success"
            />
            <${Validation} type="success">This planet name looks perfect!<//>
          <//>
          <${FieldLayout} width="300px">
            <label for="validation-warning">Planet name</label>
            <${TextInput}
              id="validation-warning"
              type="text"
              value="mercury"
              validation="warning"
            />
            <${Validation} type="warning">
              Planet name should usually start with an upper case letter.
            <//>
          <//>
          <${FieldLayout} width="300px">
            <label for="validation-error">Planet name</label>
            <${TextInput}
              id="validation-error"
              type="text"
              value="m3rcury!"
              validation="error"
            />
            <${Validation} type="error">
              Planet name can't contain special characters.
            <//>
          <//>
        <//>
      <//>
    `;
  }
}
