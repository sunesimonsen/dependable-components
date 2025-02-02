import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    color: var(--dc-color-neutral-50);
  }
`;

export class Hint {
  render({ children, className, ...other }) {
    return h(
      "span",
      { className: classes(className, styles), ...other },
      children,
    );
  }
}
