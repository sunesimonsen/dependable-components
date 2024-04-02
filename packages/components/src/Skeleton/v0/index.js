import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
    display: inline-block;
    position: relative;
    animation: 300ms linear 0s 1 normal none running &(fade-in);
    border-radius: 4px;
    width: var(--dc-skeleton-width, 100%);
    overflow: hidden;
    line-height: 0.6;
    background-color: ${transparentColor("neutral-70", 35)};
  }

  @keyframes &(fade-in) {
    0%,
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:before {
    position: absolute;
    top: 0px;
    width: 1000px;
    height: 100%;
    content: "";
    left: -1800px;
    animation: 1.5s ease-in-out 300ms infinite normal none running &(slide);
    background-image: linear-gradient(
      45deg,
      transparent,
      ${transparentColor("neutral-70", 35)},
      transparent
    );
  }

  @keyframes &(slide) {
    100% {
      left: 100%;
    }
  }
`;

const numberBetween = (from, to) =>
  Math.round(Math.random() * (Number(to) - Number(from)) + Number(from));

export class Skeleton {
  constructor({ from = 100, to = 100 }) {
    this.widthStyles = numberBetween(from, to) + "%";
  }

  render({ className }) {
    return html`
      <div
        style=${{ "--dc-skeleton-width": this.widthStyles }}
        className=${classes(styles, className)}
      >
        ${"\u00A0"}
      </div>
    `;
  }
}
