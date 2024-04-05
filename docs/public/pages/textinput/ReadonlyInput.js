import { html } from "@dependable/htm";
import { observable } from "@dependable/state";

import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { TextInput } from "@dependable/components/TextInput/v0";

const value = observable("Mercury");

const onChange = (e) => {
  value(e.target.value);
};

const onSubmit = () => {
  alert(`Current value: ${value()}`);
};

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="300px" justifyItems="start" gap="0.5em">
          <label for="planet-name-readonly">Planet name</label>
          <${TextInput}
            id="planet-name-readonly"
            readonly
            type="text"
            .value=${value()}
            onChange=${onChange}
          />
          <${Button} disabled onClick=${onSubmit}>Submit<//>
        <//>
      <//>
    `;
  }
}
