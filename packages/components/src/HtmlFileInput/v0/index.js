import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
    appearance: none;
    border: 1px solid var(--dc-color-neutral-70);
    border-radius: 4px;
    width: var(--dc-text-input-width, 100%);
    box-sizing: border-box;
    vertical-align: middle;
    font-family: inherit;
    min-height: 40px;
    line-height: 1.28571;
    font-size: 14px;
    padding: 0.3em;
    background-color: var(--dc-color-background);
    color: var(--dc-color-foreground);
    transition:
      border-color 0.25s ease-in-out 0s,
      outline 0.1s ease-in-out 0s;
  }

  &[disabled],
  &:disabled,
  &[aria-disabled="true"] {
    border-color: var(--dc-color-neutral-80);
    background-color: var(--dc-color-neutral-97);
  }

  &:disabled::file-selector-button,
  &:hover:disabled::file-selector-button {
    border-color: transparent;
    background-color: var(--dc-color-neutral-80);
    color: var(--dc-color-neutral-50);
    cursor: default;
  }

  &:hover {
    border-color: var(--dc-color-primary-50);
  }

  &:focus,
  &:focus-within {
    outline: none;
    border-color: var(--dc-color-primary-50);
    outline: var(--dc-focus-ring);
  }

  &[disabled],
  &:disabled,
  &[aria-disabled="true"] {
    cursor: default;
    color: var(--dc-color-neutral-70);
    pointer-events: none;
  }

  &::file-selector-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--dc-color-primary-50);
    border-radius: var(
      --dc-button-border-radius,
      var(--dc-component-border-radius)
    );
    cursor: pointer;
    border: 1px solid var(--dc-color-primary-50);
    height: 2.4em;
    padding: var(--dc-button-padding, 0 1.07143em);
    background-color: var(--dc-color-secondary-0);
    font-size: 0.88em;
    font-family: var(--dc-font-family);
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition:
      border-color 0.25s ease-in-out 0s,
      outline 0.1s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
    margin-inline-end: 0.6em;
  }

  &::file-selector-button:hover,
  &::file-selector-button:active {
    border-color: var(--dc-color-primary-30);
  }

  &::file-selector-button:hover {
    background-color: ${transparentColor("neutral-70", 35)};
  }

  &::file-selector-button:active {
    background-color: ${transparentColor("neutral-50", 35)};
  }

  &[data-validation="success"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("success-40", 35)};

    border-color: var(--dc-color-success-40);
  }

  &[data-validation="success"]::file-selector-button {
    color: var(--dc-color-success-40);
    border-color: var(--dc-color-success-40);
  }

  &[data-validation="warning"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("warning-50", 35)};

    border-color: var(--dc-color-warning-50);
  }

  &[data-validation="warning"]::file-selector-button {
    color: var(--dc-color-warning-40);
    border-color: var(--dc-color-warning-40);
  }

  &[data-validation="error"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("error-40", 35)};

    border-color: var(--dc-color-error-40);
  }

  &[data-validation="error"]::file-selector-button {
    color: var(--dc-color-error-50);
    border-color: var(--dc-color-error-40);
  }
`;

export class HtmlFileInput {
  render({ className, validation, ...other }) {
    return h("input", {
      type: "file",
      className: classes(styles, className),
      "data-validation": validation && validation,
      "aria-invalid": validation && "true",
      ...other,
    });
  }
}
