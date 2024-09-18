import { html } from "@dependable/htm";
import { observable } from "@dependable/state";

import { Validation } from "@dependable/components/Validation/v0";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { TextInput } from "@dependable/components/TextInput/v0";

const value = observable("");
const showValidation = observable(false);

const onChange = (e) => {
  value(e.target.value);
  showValidation(false);
};

const onSubmit = () => {
  if (!value()) {
    showValidation(true);
  } else {
    alert(`Current value: ${value()}`);
  }
};

export default class Example {
  renderValidation() {
    return html`<${Validation} type="error">The planet name can't be empty<//>`;
  }

  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start" gap="1em">
          <${ColumnLayout} columns="300px" justifyItems="start" gap="0.3em">
            <label for="planet-name">Planet name</label>
            <${TextInput}
              id="planet-name"
              type="text"
              .value=${value()}
              onChange=${onChange}
            />
            ${showValidation() && this.renderValidation()}
          <//>
          <${Button} onClick=${onSubmit}>Submit<//>
        <//>
      <//>
    `;
  }
}
