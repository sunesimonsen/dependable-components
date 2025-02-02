import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { transparentColor } from "../../theming/v0";

export const textInputStyles = css`
  & {
    appearance: none;
    border: 1px solid var(--dc-color-neutral-70);
    border-radius: 4px;
    width: var(--dc-text-input-width, 100%);
    box-sizing: border-box;
    vertical-align: middle;
    font-family: inherit;
    padding: 0.714286em 0.857143em;
    min-height: 40px;
    line-height: 1.3em;
    font-size: 14px;
    background-color: var(--dc-color-background);
    color: var(--dc-color-foreground);
    transition:
      border-color 0.25s ease-in-out 0s,
      outline 0.1s ease-in-out 0s;
  }

  &[disabled],
  &:disabled,
  &[aria-disabled="true"],
  &[readonly],
  &[aria-readonly="true"] {
    border-color: var(--dc-color-neutral-80);
    background-color: var(--dc-color-neutral-97);
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

  &[data-validation="success"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("success-40", 35)};

    border-color: var(--dc-color-success-40);
  }

  &[data-validation="warning"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("warning-50", 35)};

    border-color: var(--dc-color-warning-50);
  }

  &[data-validation="error"] {
    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      ${transparentColor("error-40", 35)};

    border-color: var(--dc-color-error-40);
  }
`;

export class TextInput {
  render({ className, validation, autocomplete = "off", ...other }) {
    return h("input", {
      type: "text",
      autocomplete,
      className: classes(className, textInputStyles),
      "data-validation": validation && validation,
      "aria-invalid": validation && "true",
      ...other,
    });
  }
}
