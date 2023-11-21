import { html } from "@dependable/view";
import { css } from "stylewars";

import { Center } from "@dependable/components/Center/v0";
import AnswerBot26Icon from "@dependable/icons/AnswerBot26Icon";

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
        <${AnswerBot26Icon} className=${answerBotStyles} />
      <//>
    `;
  }
}
