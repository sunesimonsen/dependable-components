import { html } from "@dependable/htm";
import { css } from "stylewars";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import SearchStroke12Icon from "@dependable/icons/SearchStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";
import CheckCircleStroke12Icon from "@dependable/icons/CheckCircleStroke12Icon";

const toolbarStyles = css`
  & {
    background: var(--dc-color-neutral-95);
    height: 400px;
  }
`;

class Toolbar {
  render({ children }) {
    return html` <div className=${toolbarStyles} data-layout="start">
      ${children}
    </div>`;
  }
}

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="4" justifyItems="stretch">
        <${Toolbar}>
          <${ToolbarLayout} className=${toolbarStyles} sections="start">
            <${IconButton}><${MenuStroke12Icon} /><//>
          <//>
        <//>
        <${Toolbar}>
          <${ToolbarLayout} className=${toolbarStyles} sections="end">
            <${IconButton}><${SearchStroke12Icon} /><//>
            <${IconButton}><${GearStroke12Icon} /><//>
          <//>
        <//>
        <${Toolbar}>
          <${ToolbarLayout} className=${toolbarStyles} sections="start end">
            <div>
              <${IconButton}><${MenuStroke12Icon} /><//>
            </div>
            <div>
              <${IconButton}><${SearchStroke12Icon} /><//>
              <${IconButton}><${GearStroke12Icon} /><//>
            </div>
          <//>
        <//>
        <${Toolbar}>
          <${ToolbarLayout} sections="start center end">
            <div>
              <${IconButton}><${MenuStroke12Icon} /><//>
            </div>
            <div>
              <${IconButton}><${CheckCircleStroke12Icon} /><//>
            </div>
            <div>
              <${IconButton}><${SearchStroke12Icon} /><//>
              <${IconButton}><${GearStroke12Icon} /><//>
            </div>
          <//>
        <//>
      <//>
    `;
  }
}
