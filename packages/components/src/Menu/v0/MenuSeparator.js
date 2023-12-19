import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: block;
    margin: 4px 0px;
    border-bottom: 1px solid var(--dc-color-neutra-2);
  }
`;

export class MenuSeparator {
  render() {
    return html`<div class=${styles} />`;
  }
}
