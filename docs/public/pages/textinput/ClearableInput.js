import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
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

    this.id = id++;
  }

  render({ Icon }) {
    return html`
      <label for=${this.id}>Find planet</label>
      <${ClearableInput}
        id=${this.id}
        .value=${this.value()}
        onInput=${this.onChange}
        onClear=${this.onClear}
        Icon=${Icon}
      />
      <${Button} onClick=${this.onSubmit}>Search<//>
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
        <${ColumnLayout} columns="auto 300px auto">
          <${ClearableExample} />
          <${ClearableExample} Icon=${PlanetIcon} />
        <//>
      <//>
    `;
  }
}
