import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    text-decoration: none;
    color: var(--dc-color-primary-50);
  }

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
    color: var(--dc-color-primary-40);
  }

  &:active {
    text-decoration: underline;
    color: var(--dc-color-primary-30);
  }
`;

export class Anchor {
  render({ children, className, ...other }) {
    return h(
      "a",
      { className: classes(styles, className), ...other },
      children,
    );
  }
}
