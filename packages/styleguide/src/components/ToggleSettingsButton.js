import { h } from "@dependable/view";
import { IconButton } from "@dependable/components/IconButton/v0";
import { SidebarToggle } from "@dependable/components/Sidebar/v0";
import GearStroke16Icon from "@dependable/icons/GearStroke16Icon";

export class ToggleSettingsButton extends SidebarToggle {
  render() {
    return h(
      IconButton,
      {
        pill: true,
        basic: true,
        onClick: this.onClick,
        "aria-pressed": this.pressed(),
      },
      h(GearStroke16Icon, { width: "24", height: "24" }),
    );
  }
}
