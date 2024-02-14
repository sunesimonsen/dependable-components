import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { MediaInput } from "@dependable/components/MediaInput/v0";
import { me2, ms2 } from "@dependable/components/spacing/v0";

import SearchStroke16Icon from "@dependable/icons/SearchStroke16Icon";

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
        <${ColumnLayout} columns="auto 300px auto">
          <label for="media-planet-name">Find planet</label>
          <${MediaInput}>
            <span className=${me2}>🌘</span>
            <input
              id="media-planet-name"
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
