import { html } from "@dependable/htm";
import { css } from "stylewars";
import { Bar } from "@dependable/components/Bar/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import SearchStroke12Icon from "@dependable/icons/SearchStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";

const styles = css`
  & {
    background: var(--dc-color-neutral-95);
  }
`;

export default class Example {
  render() {
    return html`
      <${ColumnLayout} stretched>
        <${ToolbarLayout} className=${styles} sections="start">
          <${IconButton}><${MenuStroke12Icon} /><//>
        <//>
        <${ToolbarLayout} className=${styles} sections="end">
          <${IconButton}><${SearchStroke12Icon} /><//>
          <${IconButton}><${GearStroke12Icon} /><//>
        <//>
        <${ToolbarLayout} className=${styles} sections="start end">
          <div>
            <${IconButton}><${MenuStroke12Icon} /><//>
          </div>
          <div>
            <${IconButton}><${SearchStroke12Icon} /><//>
            <${IconButton}><${GearStroke12Icon} /><//>
          </div>
        <//>
        <${ToolbarLayout} className=${styles} sections="start center end">
          <div>
            <${IconButton}><${MenuStroke12Icon} /><//>
          </div>
          <div>${new Date().toDateString()}</div>
          <div>
            <${IconButton}><${SearchStroke12Icon} /><//>
            <${IconButton}><${GearStroke12Icon} /><//>
          </div>
        <//>
      <//>
    `;
  }
}
