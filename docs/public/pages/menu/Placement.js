import { html } from "@dependable/htm";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  Menu,
} from "@dependable/components/Menu/v0";

export default class Example {
  constructor() {
    this.onSelectItem = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render() {
    return html`
      <${Center} style="margin-top: 140px">
        <${Menu} onSelectItem=${this.onSelectItem} placement="top-start">
          <${MenuButton}>Go to planet<//>
          <${MenuPopup}>
            <${MenuItem} key="mercury" value=${0}>Mercury<//>
            <${MenuItem} key="venus" value=${1}>Venus<//>
            <${MenuItem} key="earth" value=${2}>Earth<//>
            <${MenuItem} key="mars" value=${3}>Mars<//>
          <//>
        <//>
      </>
    `;
  }
}
