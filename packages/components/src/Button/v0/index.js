import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { Pulse } from "../../Pulse/v0/index.js";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
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
    height: 2.8em;
    padding: var(--dc-button-padding, 0 1.07143em);
    width: var(--dc-button-width, initial);
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
  }

  &:hover,
  &[aria-pressed="true"],
  &:active {
    border-color: var(--dc-color-primary-30);
  }

  &:hover {
    background-color: ${transparentColor("neutral-70", 35)};
  }

  &[aria-pressed="true"],
  &:active {
    background-color: ${transparentColor("neutral-50", 35)};
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
    background-color: var(--dc-color-neutral-80);
    color: var(--dc-color-neutral-50);
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
    color: white;
    background-color: var(--dc-color-primary-50);
  }

  &:hover {
    background-color: var(--dc-color-primary-30);
  }

  &[aria-pressed="true"],
  &:active {
    background-color: var(--dc-color-primary-20);
  }
`;

const dangerStyles = css`
  & {
    --dc-color-primary-20: var(--dc-color-error-20);
    --dc-color-primary-30: var(--dc-color-error-30);
    --dc-color-primary-40: var(--dc-color-error-40);
    --dc-color-primary-50: var(--dc-color-error-50);
    --dc-color-primary-70: var(--dc-color-error-70);
    --dc-color-primary-80: var(--dc-color-error-80);
    --dc-color-primary-90: var(--dc-color-error-90);

    --dc-focus-ring-color: ${transparentColor("primary-50", 35)};

    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      var(--dc-focus-ring-color);
  }
`;

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
    danger,
    disabled,
    loading,
    className,
    children,
    onClick,
    ...other
  }) {
    return h(
      "button",
      {
        className: classes(
          styles,
          basic && basicStyles,
          primary && primaryStyles,
          stretched && stretchedStyles,
          danger && dangerStyles,
          className,
        ),
        disabled,
        onClick: loading ? null : onClick,
        ...other,
      },
      loading && h(Pulse, { className: loaderStyles }),
      h(
        "span",
        { className: classes(childrenStyles, loading && loadingStyles) },
        children,
      ),
    );
  }
}
