import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
} from "@dependable/components/Dialog/v0";
import { Center } from "@dependable/components/Center/v0";

const visible = observable(false, { id: "default-dialog-visible" });

export default class Example {
  constructor() {
    this.showDialog = () => {
      visible(true);
    };

    this.closeDialog = () => {
      visible(false);
    };
  }

  renderDialog() {
    return html`
      <${Dialog} onClose=${this.closeDialog}>
        <${DialogHeader}>Remove plant food from your garden<//>
        <${DialogBody}>
          <p>
            Plant food helps gardens grow. Removing plant food negatively
            affects the plant health.
          </p>
        <//>
        <${DialogFooter}>
          <${Button} danger primary onClick=${this.closeDialog}>
            Remove plant food
          <//>
        <//>
        <${DialogCloseButton} />
      <//>
    `;
  }

  render() {
    return html`
      <${Center}>
        <${Button} onClick=${this.showDialog}>Open danger dialog<//>
        ${visible() && this.renderDialog()}
      <//>
    `;
  }
}
