import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    text-decoration: none;
    color: var(--dc-color-primary-0);
  }

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
    color: var(--dc-color-primary-1);
  }

  &:active {
    text-decoration: underline;
    color: var(--dc-color-primary-2);
  }
`;

export class Anchor {
  render({ children, className, ...other }) {
    return html`
      <a className=${classes(styles, className)} ...${other}>${children}</a>
    `;
  }
}
