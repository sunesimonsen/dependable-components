import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { MediaInput } from "@dependable/components/MediaInput/v0";
import { me2, ms2 } from "@dependable/components/spacing/v0";

import SearchStroke16Icon from "@dependable/icons/SearchStroke16Icon";
import CarStroke12Icon from "@dependable/icons/CarStroke12Icon";

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
          <label for="car-brand">Find brand</label>
          <${MediaInput}>
            <${CarStroke12Icon} className=${me2} />
            <input
              id="car-brand"
              type="text"
              .value=${value()}
              onChange=${onChange}
            />
            <${SearchStroke16Icon} className=${ms2} />
          <//>
          <${Button} onClick=${onSubmit}>Search<//>
        <//>
      <//>
    `;
  }
}
