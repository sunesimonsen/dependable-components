import { html } from "@dependable/htm";
import { IconButton } from "@dependable/components/IconButton/v0";
import { SidebarToggle } from "@dependable/components/Sidebar/v0";
import GearStroke16Icon from "@dependable/icons/GearStroke16Icon";

export class ToggleSettingsButton extends SidebarToggle {
  render() {
    return html`
      <${IconButton}
        pill
        basic
        onClick=${this.onClick}
        aria-pressed=${this.pressed()}
      >
        <${GearStroke16Icon} width="24" height="24" />
      <//>
    `;
  }
}
