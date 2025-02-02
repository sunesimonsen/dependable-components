import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
    margin: 0.3em;
    width: 1.2em;
    height: 1.2em;
    appearance: none;
    position: relative;
    border-radius: 50%;
    border: thin solid var(--dc-color-neutral-80);
    background-color: var(--dc-color-background);
    outline-offset: 0;
    transition:
      border-color 0.25s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:disabled {
    background-color: var(--dc-color-neutral-80);
  }

  &:not(:disabled):hover {
    border-color: var(--dc-color-primary-40);
    background-color: ${transparentColor("primary-80", 35)};
  }

  &:checked {
    border-color: var(--dc-color-primary-40);
    background: var(--dc-color-primary-40);
  }

  &:checked:disabled {
    border-color: var(--dc-color-neutral-80);
    background: var(--dc-color-neutral-80);
  }

  &:not(:disabled):checked:hover {
    border-color: var(--dc-color-primary-30);
    background: var(--dc-color-primary-30);
  }

  &:checked::before {
    content: "";
    position: absolute;
    background: white;
    top: calc(50% - 2px);
    left: calc(50% - 2px);
    height: 4px;
    width: 4px;
    border-radius: 50%;
  }

  &:focus-visible {
    outline: var(--dc-focus-ring);
  }
`;

export class Radio {
  render({ className, ...other }) {
    return h("input", {
      type: "radio",
      className: classes(className, styles),
      ...other,
    });
  }
}
