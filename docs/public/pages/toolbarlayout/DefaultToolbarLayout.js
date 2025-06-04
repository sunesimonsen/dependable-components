import { html } from "@dependable/htm";
import { css } from "stylewars";
import { Bar } from "@dependable/components/Bar/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";

const styles = css`
  & {
    background: var(--dc-color-neutral-95);
  }
`;

export default class Example {
  render() {
    return html`
      <${Bar} className=${styles}>
        <${ToolbarLayout}>
          <${IconButton}><${MenuStroke12Icon} /><//>
          <${IconButton}><${GearStroke12Icon} /><//>
        <//>
      <//>
    `;
  }
}
