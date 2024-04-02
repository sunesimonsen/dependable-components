import { html } from "@dependable/htm";
import { css } from "stylewars";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Center } from "@dependable/components/Center/v0";

import StarStroke16Icon from "@dependable/icons/StarStroke16Icon";
import StarFill16Icon from "@dependable/icons/StarFill16Icon";

const redStyles = css`
  & {
    color: red;
  }
`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2">
          <${StarStroke16Icon} />
          <${StarFill16Icon} />
          <${StarStroke16Icon} className=${redStyles} />
          <${StarFill16Icon} className=${redStyles} />
        <//>
      <//>
    `;
  }
}
