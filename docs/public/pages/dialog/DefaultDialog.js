import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
  DialogSubmitButton,
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
      <${Dialog} onClose=${this.closeDialog} onSubmit=${this.closeDialog}>
        <${DialogHeader}>Do you need plant food?<//>
        <${DialogBody}>
          <p>
            To boost your plants chances of success, use a combination of
            top-quality soil and the right plant food. Try growing in containers
            filled with plant food, which can help protect plants from
            over-watering.
          </p>
        <//>
        <${DialogFooter}>
          <${DialogSubmitButton} primary>Add plant food<//>
        <//>
        <${DialogCloseButton} />
      <//>
    `;
  }

  render() {
    return html`
      <${Center}>
        <${Button} onClick=${this.showDialog}>Open dialog<//>
        ${visible() && this.renderDialog()}
      <//>
    `;
  }
}
