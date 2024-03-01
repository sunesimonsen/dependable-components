import { html } from "@dependable/view";
import { IconButton } from "@dependable/components/IconButton/v0";
import { SidebarToggle } from "@dependable/components/Sidebar/v0";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";

export class ToggleSettingsButton extends SidebarToggle {
  render() {
    return html`
      <${IconButton}
        basic
        onClick=${this.onClick}
        aria-pressed=${this.pressed()}
      >
        <${GearStroke12Icon} />
      <//>
    `;
  }
}
