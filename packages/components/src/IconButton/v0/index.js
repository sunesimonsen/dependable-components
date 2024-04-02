import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { Button } from "../../Button/v0/index.js";

const styles = css`
  & {
    --dc-button-padding: 4px;
    --dc-button-width: 2.8em;
  }
`;

const pillStyles = css`
  & {
    --dc-button-border-radius: 100%;
  }
`;

export class IconButton {
  render({ className, pill, children, ...other }) {
    return html`
      <${Button}
        className=${classes(styles, pill && pillStyles, className)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}
