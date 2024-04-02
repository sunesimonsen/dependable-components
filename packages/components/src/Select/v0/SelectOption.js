import { h } from "@dependable/view";
import { MenuItem } from "../../Menu/v0/MenuItem.js";
import { css } from "stylewars";
import CheckLgStroke16Icon from "@dependable/icons/CheckLgStroke16Icon";

const iconStyles = css`
  & {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transition: opacity 0.1s ease-in-out 0s;
    opacity: 1;
    color: var(--dc-color-primary-50);
    width: 40px;
  }
`;

export class SelectOption {
  static isSelectable = true;

  renderIcon() {
    return h("div", { className: iconStyles }, h(CheckLgStroke16Icon));
  }

  render({ children, selected, ...other }) {
    return h(
      MenuItem,
      {
        role: "option",
        "aria-selected": selected ? "true" : "false",
        ...other,
      },
      selected && this.renderIcon(),
      children,
    );
  }
}
