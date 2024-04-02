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
    this.onSelect = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render() {
    return html`
      <${Center}>
        <${Menu} onSelect=${this.onSelect}>
          <${MenuButton}>Go to planet<//>
          <${MenuPopup}>
            <${MenuItem} key="mercury" value=${0}>Mercury<//>
            <${MenuItem} key="venus" value=${1}>Venus<//>
            <${MenuItem} key="earth" value=${2}>Earth<//>
            <${MenuItem} key="mars" value=${3}>Mars<//>
            <${MenuItem} key="jupiter" value=${4}>Jupiter<//>
            <${MenuItem} key="saturn" value=${5}>Saturn<//>
            <${MenuItem} key="uranus" value=${6}>Uranus<//>
            <${MenuItem} key="neptune" value=${7}>Neptune<//>
          <//>
        <//>
      </>
    `;
  }
}
