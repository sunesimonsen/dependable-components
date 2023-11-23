import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ms1, me2 } from "@dependable/components/spacing/v0";
import ChevronDownStroke12Icon from "@dependable/icons/ChevronDownStroke12Icon";
import LifesaverStroke16Icon from "@dependable/icons/LifesaverStroke16Icon";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto">
          <${Button}>
            <${LifesaverStroke16Icon} className=${me2} />
            Get Help
          <//>
          <${Button}>
            Menu
            <${ChevronDownStroke12Icon} className=${ms1} />
          <//>
        <//>
      <//>
    `;
  }
}
