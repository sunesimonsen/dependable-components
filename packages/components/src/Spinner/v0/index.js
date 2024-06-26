import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  &,
  &:after {
    border-radius: 50%;
    width: var(--dc-spinner-size, 50px);
    height: var(--dc-spinner-size, 50px);
  }

  & {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-indent: -9999em;
    border-width: var(--dc-spinner-border-size, 3px);
    border-style: solid;
    border-color: var(--dc-spinner-background, var(--dc-color-neutral-85));
    border-left-color: var(--dc-spinner-color, var(--dc-color-primary-50));
    transform: translateZ(0);
    animation: &(rotate) 0.9s infinite linear;
  }

  @keyframes &(rotate) {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export class Spinner {
  render({ className }) {
    return h(
      "div",
      { className: classes(styles, className), role: "progressbar" },
      "Loading...",
    );
  }
}
