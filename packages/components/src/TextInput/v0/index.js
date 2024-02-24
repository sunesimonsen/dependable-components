import { html } from "@dependable/view";
import { css, classes } from "stylewars";

export const textInputStyles = css`
  & {
    appearance: none;
    border: 1px solid var(--dc-color-neutral-70);
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    font-family: inherit;
    padding: 0.714286em 0.857143em;
    min-height: 40px;
    line-height: 1.28571;
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
`;

export class TextInput {
  render({ className, ...other }) {
    return html`
      <input
        type="text"
        className=${classes(className, textInputStyles)}
        ...${other}
      />
    `;
  }
}
