import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { IconButton } from "../../IconButton/v0";
import XStroke16Icon from "@dependable/icons/XStroke16Icon";
import { DialogCloseEvent } from "./events.js";

const styles = css`
  & {
    position: absolute;
    inset-inline-end: 26px;
    inset-block-start: 10px;
  }
`;

export class DialogCloseButton {
  constructor() {
    this.onClick = (e) => {
      e.target.dispatchEvent(new DialogCloseEvent());
    };
  }

  render({ children, className, ...other }) {
    return html`
      <${IconButton}
        className=${classes(className, styles)}
        pill
        basic
        onClick=${this.onClick}
        ...${other}
      >
        <${XStroke16Icon} />
      <//>
    `;
  }
}
