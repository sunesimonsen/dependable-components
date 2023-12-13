import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: block;
    margin: 4px 0px;
    border-bottom: 1px solid rgb(233, 235, 237);
  }
`;

export class MenuSeparator {
  render() {
    return html`<div class=${styles} />`;
  }
}
