import { html } from "@dependable/view";
import { Bar } from "@dependable/components/Bar/v0";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import { Button } from "@dependable/components/Button/v0";
import { SearchInput } from "@dependable/components/SearchInput/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import SearchStroke12Icon from "@dependable/icons/SearchStroke12Icon";
import { p3 } from "@dependable/components/spacing/v0";

export default class Example {
  render() {
    return html`
      <${BorderLayout} stretched style="height: 400px">
        <${Bar} data-layout="top">
          <${ColumnLayout}
            stretched
            columns="1fr auto 1fr"
            justifyItems="stretch"
          >
            <div className=${p3}>
              <${IconButton}><${MenuStroke12Icon} /><//>
            </div>
            <div>${new Date().toDateString()}</div>
            <div className=${p3} style="text-align: end">
              <${IconButton}><${SearchStroke12Icon} /><//>
            </div>
          <//>
        <//>
        <${Bar} data-layout="bottom" className=${p3} style="text-align: end">
          <${Button} primary>Send<//>
        <//>
      <//>
    `;
  }
}
