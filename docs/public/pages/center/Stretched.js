import { html } from "@dependable/view";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const containerStyles = css`
  & {
    border: thin solid gray;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
`;

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="2" stretched>
        <${Center} className=${containerStyles}>Not stretched<//>
        <${Center} stretched className=${containerStyles}>Stretched<//>
      <//>
    `;
  }
}
