import { html } from "@dependable/view";
import { Bar } from "@dependable/components/Bar/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";

export default class Example {
  render() {
    return html`
      <${ToolbarLayout}>
        <${IconButton}><${MenuStroke12Icon} /><//>
        <${IconButton}><${GearStroke12Icon} /><//>
      <//>
    `;
  }
}
