import { html } from "@dependable/view";
import { css } from "stylewars";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  Menu,
} from "@dependable/components/Menu/v0";

const containerStyles = css`
  & {
    text-align: center;
    padding-bottom: 160px;
  }
`;

export default class Example {
  constructor() {
    this.onSelect = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render() {
    return html`
      <div className=${containerStyles}>
        <${Menu} onSelectItem=${this.onSelect}>
          <${MenuButton}>Options<//>
          <${MenuPopup}>
            <${MenuItem} key="one" value=${1}>One<//>
            <${MenuItem} key="two" value=${2}>Two<//>
            <${MenuItem} key="three" value=${3}>Three<//>
            <${MenuItem} key="four" value=${4}>Four<//>
          <//>
        <//>
      </div>
    `;
  }
}
