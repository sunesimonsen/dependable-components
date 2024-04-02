import { html } from "@dependable/htm";
import { css } from "stylewars";

import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import AnswerBot26Icon from "@dependable/icons/AnswerBot26Icon";

const containerStyles = css`
  & {
    fill: #bbb;
  }
`;

const answerBotStyles = css`
  & {
    fill: rgb(3, 54, 61);
    color: rgb(214, 238, 241);
  }
`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2" className=${containerStyles}>
          <${AnswerBot26Icon} />
          <${AnswerBot26Icon} className=${answerBotStyles} />
        <//>
      <//>
    `;
  }
}
