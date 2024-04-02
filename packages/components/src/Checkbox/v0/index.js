import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import CheckSmFill12Icon from "@dependable/icons/CheckSmFill12Icon";
import DashFill12Icon from "@dependable/icons/DashFill12Icon";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }

  & + label {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    color: var(--dc-color-background);
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: thin solid var(--dc-color-background);
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  &:checked:not(:disabled) + label,
  &:indeterminate:not(:disabled) + label {
    border-color: var(--dc-color-primary-50);
    background-color: var(--dc-color-primary-50);
  }

  &:not(:checked):not(:indeterminate):not(:disabled):not(:focus-visible)
    + label {
    border-color: var(--dc-color-neutral-80);
    background-color: var(--dc-color-background);
  }

  & + label &-checked-icon,
  & + label &-dash-icon {
    display: none;
  }

  &:checked + label &-checked-icon {
    display: initial;
  }

  &:indeterminate + label &-checked-icon {
    display: none;
  }

  &:indeterminate + label &-dash-icon {
    display: initial;
  }

  &:not(:checked):not(:indeterminate):not(:disabled) + label:hover {
    border-color: var(--dc-color-primary-50);
    background-color: ${transparentColor("primary-80", 35)};
  }

  &:checked:not(:disabled) + label:hover,
  &:indeterminate:not(:disabled) + label:hover {
    border-color: var(--dc-color-primary-30);
    background-color: var(--dc-color-primary-30);
  }

  &:checked:not(:disabled):focus-visible + label,
  &:not(:disabled):focus-visible + label {
    border-color: var(--dc-color-primary-50);
    outline: var(--dc-focus-ring);
  }

  &:disabled,
  &:disabled + label {
    cursor: default;
  }

  &:disabled + label {
    border-color: transparent;
    background-color: var(--dc-color-neutral-80);
  }
`;

export class Checkbox {
  render({ id, className, indeterminate, checked, ...other }) {
    return html`
      <input
        type="checkbox"
        id=${id}
        className=${classes(className, styles)}
        checked=${checked}
        .indeterminate=${indeterminate}
        ...${other}
      />
      <label for=${id}>
        <${DashFill12Icon} className=${`${styles}-dash-icon`} />
        <${CheckSmFill12Icon} className=${`${styles}-checked-icon`} />
      </label>
    `;
  }
}
