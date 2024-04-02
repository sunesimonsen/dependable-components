import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { SelectItemEvent, FocusItemEvent } from "./events.js";
import { transparentColor } from "../../theming/v0";

const styles = css`
  & {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 8px 36px;
    text-decoration: none;
    line-height: 20px;
    overflow-wrap: break-word;
    user-select: none;
    color: var(--dc-color-foreground);
    min-width: 120px;
    border: none;
    background: none;
    text-align: start;
    box-sizing: border-box;
  }

  &:first-child {
    margin-top: 4px;
  }

  &:last-child {
    margin-bottom: 4px;
  }

  &:focus {
    outline: none;
  }
`;

const focusedStyles = css`
  & {
    background: ${transparentColor("primary-80", 35)};
  }
`;

export class MenuItem {
  static isSelectable = true;

  constructor() {
    this.onMouseDown = (e) => {
      if (!e.shiftKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
        e.target.dispatchEvent(
          new SelectItemEvent({
            key: this.props.key,
            value: this.props.value,
          }),
        );
      }
    };

    this.onMouseEnter = (e) => {
      e.target.dispatchEvent(
        new FocusItemEvent({
          key: this.props.key,
          value: this.props.value,
        }),
      );
    };
  }

  get model() {
    return this.context.model;
  }

  render({ key, children, ...other }, { model }) {
    const isFocused = this.model.focused()?.key === key;

    return html`
      <div
        id=${`${model.id}-item-${key}`}
        tabindex="-1"
        role="menuitem"
        onMouseDown=${this.onMouseDown}
        onMouseEnter=${this.onMouseEnter}
        className=${classes(styles, isFocused && focusedStyles)}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
