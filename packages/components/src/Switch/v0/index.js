import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }

  & + label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    color: var(--dc-color-neutral-0);
    width: 40px;
    height: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  &:checked:not(:disabled) + label {
    background-color: var(--dc-color-primary-0);
  }

  & + label:before {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    background: var(--dc-color-neutral-0);
    border-radius: 100%;
    transition: left 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s;
  }

  &:checked + label:before {
    left: calc(40px - 12px - 4px);
  }

  [dir="rtl"] &:checked + label:before {
    left: 4px;
  }

  &:not(:checked):not(:disabled) + label {
    background-color: rgb(135, 146, 157);
  }

  &:not(:checked) + label:before {
    left: 4px;
  }

  [dir="rtl"] &:not(:checked) + label:before {
    left: calc(40px - 12px - 4px);
  }

  &:not(:checked):not(:disabled) + label:hover {
    background-color: rgb(104, 115, 125);
  }

  &:checked:not(:disabled) + label:hover {
    background-color: var(--dc-color-primary-1);
  }

  &:focus-visible + label {
    outline: var(--dc-focus-ring);
  }

  &:disabled,
  &:disabled + label {
    cursor: default;
  }

  &:disabled + label {
    background-color: var(--dc-color-neutra-2);
  }
`;

export class Switch {
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
      <label for=${id}></label>
    `;
  }
}
