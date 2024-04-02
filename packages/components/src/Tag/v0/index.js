import { html } from "@dependable/htm";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    padding: 0.2em 0.4em;
    border-radius: 0.2em;
    font-size: smaller;
    font-weight: bold;
    color: var(--dc-color-neutral-30);
    background: var(--dc-color-neutral-90);
    box-sizing: border-box;
    line-height: normal;
  }
`;

const hueStyles = (hue) => css`
  & {
    color: hsl(${hue}, 100%, 95%);
    background: hsl(${hue}, 71%, 40%);
  }
`;

export class Tag {
  render({ hue, children }) {
    return html`
      <span
        className=${classes(
          styles,
          typeof hue !== "undefined" && hueStyles(hue),
        )}
        >${children}</span
      >
    `;
  }
}
