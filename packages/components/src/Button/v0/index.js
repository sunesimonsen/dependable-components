import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { Pulse } from "../../Pulse/v0/index.js";

const styles = css`
  & {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--dc-color-primary-0);
    border-radius: var(
      --dc-button-border-radius,
      var(--dc-component-border-radius)
    );
    cursor: pointer;
    border: 1px solid var(--dc-color-primary-0);
    height: 2.8em;
    padding: var(--dc-button-padding, 0 1.07143em);
    width: var(--dc-button-width, inherit);
    background-color: var(--dc-color-secondary-0);
    font-size: 0.88em;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition:
      border-color 0.25s ease-in-out 0s,
      outline 0.1s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:hover {
    border-color: var(--dc-color-primary-1);
    background-color: var(--dc-color-secondary-1);
    color: var(--dc-color-primary-1);
  }

  &[aria-pressed="true"],
  &:active {
    border-color: var(--dc-color-primary-2);
    background-color: var(--dc-color-secondary-2);
    color: var(--dc-color-primary-2);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--dc-focus-ring);
  }

  &:disabled,
  &:hover:disabled {
    border-color: transparent;
    background-color: var(--dc-color-neutral-2);
    color: var(--dc-color-neutral-4);
    cursor: default;
  }
`;

const basicStyles = css`
  &,
  &[aria-pressed="true"],
  &:hover,
  &:active {
    border-color: transparent;
  }
`;

const primaryStyles = css`
  & {
    color: var(--dc-color-neutral-0);
    background-color: var(--dc-color-primary-0);
  }

  &:hover {
    color: var(--dc-color-neutral-0);
    background-color: var(--dc-color-primary-1);
  }

  &[aria-pressed="true"],
  &:active {
    color: var(--dc-color-neutral-0);
    background-color: var(--dc-color-primary-2);
  }
`;

const dangerStyles = css``;

const stretchedStyles = css`
  & {
    width: 100%;
  }
`;

const loaderStyles = css`
  & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const loadingStyles = css`
  & {
    opacity: 0;
  }
`;

const childrenStyles = css`
  & {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

export class Button {
  render({
    basic,
    primary,
    stretched,
    disabled,
    loading,
    className,
    children,
    onClick,
    ...other
  }) {
    return html`
      <button
        className=${classes(
          styles,
          basic && basicStyles,
          primary && primaryStyles,
          stretched && stretchedStyles,
          className,
        )}
        disabled=${disabled}
        onClick=${loading ? null : onClick}
        ...${other}
      >
        ${loading && html`<${Pulse} className=${loaderStyles} />`}
        <span className=${classes(childrenStyles, loading && loadingStyles)}>
          ${children}
        </span>
      </button>
    `;
  }
}
