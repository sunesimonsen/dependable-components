import { html } from "@dependable/htm";
import { css } from "stylewars";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Notification, Toast } from "@dependable/components/Notifications/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

class NotificationExample {
  constructor() {
    this.onClick = () => {
      this.context.toast.showNotification(html`
        <${Notification}
          type="success"
          title="Mission success"
          dismissable
          autoDismiss=${3000}
        >
          The satellite has entered orbit successfully. Data transmission will
          commence shortly.
        <//>
      `);
    };
  }

  render({ children }) {
    return html`<${Button} stretched onClick=${this.onClick}>${children}<//>`;
  }
}

const placements = [
  "top-start",
  "top-center",
  "top-end",
  "bottom-start",
  "bottom-center",
  "bottom-end",
];

const containerStyles = css`
  & {
    min-width: 350px;
  }
`;

export default class Example {
  renderPlacements(placement) {
    return html`
      <${Toast} limit=${3} placement=${placement}>
        <${NotificationExample}>${placement}<//>
      <//>
    `;
  }

  render() {
    return html`
      <${Center} className=${containerStyles}>
        <${ColumnLayout} columns="3" stretched>
          ${placements.map(this.renderPlacements)}
        <//>
      <//>
    `;
  }
}
