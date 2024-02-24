import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { Popup } from "@dependable/components/Popup/v0";
import { css } from "stylewars";

const popupStyles = css`
  & {
    border: thin solid grey;
    border-radius: 4px;
    padding: 1em;
    background: var(--dc-color-neutral-20);
    color: var(--dc-color-neutral-95);
  }
`;

const containerStyles = css`
  & {
    text-align: center;
    height: 100px;
  }
`;

export default class Example {
  constructor() {
    this.createRef = (name) => (ref) => {
      this[name] = ref;
    };
  }

  didMount() {
    this.popup = new Popup(this.anchorRef, this.popupRef);

    this.popup.show();
  }

  willUnmount() {
    this.popup.hide();
  }

  render() {
    return html`
      <div className=${containerStyles}>
        <${Button} ref=${this.createRef("anchorRef")}>Anchor<//>
        <div ref=${this.createRef("popupRef")} className=${popupStyles}>
          Popup content
        </div>
      </div>
    `;
  }
}
