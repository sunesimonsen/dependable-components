import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const border = `var(--dc-bar-border-width, 1px)`;

const styles = css`
  & {
    border-style: var(--dc-bar-border-style, solid);
    border-color: var(--dc-bar-border-color, var(--dc-color-neutral-85));
    border-width: 0;
    background: var(--dc-bar-background, --dc-color-background);
  }

  &[data-layout="start"] {
    border-inline-end-width: ${border};
  }

  &[data-layout="end"] {
    border-inline-start-width: ${border};
  }

  &[data-layout="top"] {
    border-bottom-width: ${border};
  }

  &[data-layout="bottom"] {
    border-top-width: ${border};
  }
`;

export class Bar {
  render({ children, className, ...other }) {
    return html`
      <div className=${classes(styles, className)} ...${other}>${children}</div>
    `;
  }
}
