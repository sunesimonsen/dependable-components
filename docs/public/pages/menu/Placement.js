import { html } from "@dependable/view";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  Menu
} from "@dependable/components/Menu/v0";

export default class Example {
  constructor() {
    this.onSelect = e => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render() {
    return html`
      <${Center} style="margin-top: 140px">
        <${Menu} onSelect=${this.onSelect} placement="top-start">
          <${MenuButton}>Options<//>
          <${MenuPopup}>
            <${MenuItem} key="one" value=${1}>One<//>
            <${MenuItem} key="two" value=${2}>Two<//>
            <${MenuItem} key="three" value=${3}>Three<//>
            <${MenuItem} key="four" value=${4}>Four<//>
          <//>
        <//>
      </>
    `;
  }
}
