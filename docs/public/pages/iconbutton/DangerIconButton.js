import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import Box3dStroke16Icon from "@dependable/icons/Box3dStroke16Icon";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="3">
          <${IconButton} danger><${Box3dStroke16Icon} /><//>
          <${IconButton} danger primary><${Box3dStroke16Icon} /><//>
          <${IconButton} danger basic><${Box3dStroke16Icon} /><//>
        <//>
      <//>
    `;
  }
}
