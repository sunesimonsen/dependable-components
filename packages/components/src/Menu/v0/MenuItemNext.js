import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { MenuItem } from "./MenuItem.js";
import ChevronRightStroke16Icon from "@dependable/icons/ChevronRightStroke16Icon";
import ChevronLeftStroke16Icon from "@dependable/icons/ChevronLeftStroke16Icon";

const iconStyles = css`
  & {
    position: absolute;
    color: var(--dc-color-neutral-900);
  }
`;

const leftIconStyles = css`
  & {
    left: 8px;
    visibility: hidden;
  }

  [dir="rtl"] & {
    visibility: visible;
  }

  [dir="rtl"] [dir="ltr"] & {
    visibility: hidden;
  }
`;

const rightIconStyles = css`
  & {
    right: 8px;
  }

  [dir="rtl"] & {
    visibility: hidden;
  }

  [dir="rtl"] [dir="ltr"] & {
    visibility: visible;
  }
`;

export class MenuItemNext {
  static isSelectable = true;

  render({ children, ...other }) {
    return html`
      <${MenuItem} ...${other}>
        <${ChevronLeftStroke16Icon}
          className=${classes(iconStyles, leftIconStyles)}
        />
        ${children}
        <${ChevronRightStroke16Icon}
          className=${classes(iconStyles, rightIconStyles)}
        />
      <//>
    `;
  }
}
