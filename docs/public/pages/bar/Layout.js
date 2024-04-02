import { html } from "@dependable/htm";
import { classes } from "stylewars";
import { Bar } from "@dependable/components/Bar/v0";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import { Button } from "@dependable/components/Button/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import SearchStroke12Icon from "@dependable/icons/SearchStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";

export default class Example {
  render() {
    return html`
      <${BorderLayout} stretched style="height: 400px">
        <${Bar} data-layout="top">
          <${ToolbarLayout} sections="start center end">
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
        <${Bar} data-layout="bottom">
          <${ToolbarLayout} sections="end">
            <${Button} primary>Send<//>
          <//>
        <//>
      <//>
    `;
  }
}
