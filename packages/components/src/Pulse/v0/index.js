import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--dc-pulse-dot-size, 0.45em) / 2);
  }

  & > div {
    display: inline-block;
    width: var(--dc-pulse-dot-size, 0.45em);
    height: var(--dc-pulse-dot-size, 0.45em);
    border-radius: 50%;
    background: currentColor;
    animation-name: fadeOutIn;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  & > div:nth-child(1) {
    animation-delay: 0ms;
  }
  & > div:nth-child(2) {
    animation-delay: 100ms;
  }
  & > div:nth-child(3) {
    animation-delay: 200ms;
  }

  @keyframes fadeOutIn {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export class Pulse {
  render({ className }) {
    return h(
      "div",
      { className: classes(styles, className), role: "progressbar" },
      h("div"),
      h("div"),
      h("div"),
    );
  }
}
