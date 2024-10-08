import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { ClearableInput } from "@dependable/components/ClearableInput/v0";

let id = 0;

class ClearableExample {
  constructor() {
    this.value = observable("Mercury");

    this.onChange = (e) => {
      this.value(e.target.value);
    };

    this.onClear = (e) => {
      this.value("");
    };

    this.onSubmit = () => {
      alert(`Current value: ${this.value()}`);
    };

    this.id = `clearable-${id++}`;
  }

  render({ Icon }) {
    return html`
      <${ColumnLayout} justifyItems="start">
        <${FieldLayout} width="300px">
          <label for=${this.id}>Find planet</label>
          <${ClearableInput}
            id=${this.id}
            .value=${this.value()}
            onInput=${this.onChange}
            onClear=${this.onClear}
            Icon=${Icon}
          />
        <//>
        <${Button} onClick=${this.onSubmit}>Search<//>
      <//>
    `;
  }
}

class PlanetIcon {
  render(props) {
    return html`<span ...${props}>🌘</span>`;
  }
}

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${ClearableExample} />
          <${ClearableExample} Icon=${PlanetIcon} />
        <//>
      <//>
    `;
  }
}
