import { html } from "@dependable/view";
import { observable } from "@dependable/state";

import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { TextInput } from "@dependable/components/TextInput/v0";

const value = observable("Ford Focus");

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
        <${ColumnLayout} columns="auto 300px auto">
          <label for="car-model">Car model</label>
          <${TextInput}
            id="car-model"
            type="text"
            .value=${value()}
            onChange=${onChange}
          />
          <${Button} onClick=${onSubmit}>Submit<//>
        <//>
      <//>
    `;
  }
}
