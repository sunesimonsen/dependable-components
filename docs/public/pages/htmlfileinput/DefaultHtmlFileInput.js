import { html } from "@dependable/htm";
import { observable } from "@dependable/state";

import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { HtmlFileInput } from "@dependable/components/HtmlFileInput/v0";

const file = observable(null);

const onChange = (e) => {
  file(e.target.files[0]);
};

const onSubmit = () => {
  if (file()) {
    alert(`Current file name: ${file().name} of type ${file().type}`);
  } else {
    alert("Please select a file.");
  }
};

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${FieldLayout} width="400px">
            <label for="planet-picture">Planet picture</label>
            <${HtmlFileInput}
              id="planet-picture"
              onChange=${onChange}
            />
          <//>
          <${Button} onClick=${onSubmit}>Submit<//>
        <//>
      </${Center}>
    `;
  }
}
