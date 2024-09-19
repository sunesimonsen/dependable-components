import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    padding: 0.2em 0.4em;
    border-radius: 0.2em;
    font-size: smaller;
    color: var(--dc-color-neutral-20);
    background: var(--dc-color-neutral-90);
    box-sizing: border-box;
    line-height: normal;
  }
`;

const hueStyles = (hue) => css`
  & {
    color: white;
    background: hsl(${hue}, 71%, 40%);
  }
`;

export class Tag {
  render({ className, hue, children }) {
    return h(
      "span",
      {
        className: classes(
          styles,
          typeof hue !== "undefined" && hueStyles(hue),
          className,
        ),
      },
      children,
    );
  }
}
