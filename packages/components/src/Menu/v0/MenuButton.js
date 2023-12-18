import { html } from "@dependable/view";
import { Button } from "../../Button/v0/index.js";
import ChevronDownStroke12Icon from "@dependable/icons/ChevronDownStroke12Icon";
import { ms1 } from "../../spacing/v0/index.js";

export class MenuButton {
  render({ children, ...other }) {
    return html`
      <${Button} ...${other}>
        ${children}<${ChevronDownStroke12Icon} className=${ms1} />
      <//>
    `;
  }
}
