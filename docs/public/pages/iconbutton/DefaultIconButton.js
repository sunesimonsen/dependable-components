import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import Box3dStroke16Icon from "@dependable/icons/Box3dStroke16Icon";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${IconButton}><${Box3dStroke16Icon} /><//>
      <//>
    `;
  }
}
