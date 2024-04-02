import { h } from "@dependable/view";
import { Button } from "../../Button/v0/index.js";
import ChevronDownStroke12Icon from "@dependable/icons/ChevronDownStroke12Icon";
import { margin } from "../../theming/v0/index.js";

export class MenuButton {
  render({ children, ...props }) {
    return h(
      Button,
      props,
      children,
      h(ChevronDownStroke12Icon, { className: margin(1, "inline-start") }),
    );
  }
}
