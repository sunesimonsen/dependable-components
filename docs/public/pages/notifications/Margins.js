import { html } from "@dependable/view";
import { css } from "stylewars";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { Notification, Toast } from "@dependable/components/Notifications/v0";

import CheckCircleStroke16Icon from "@dependable/icons/CheckCircleStroke16Icon";

class NotificationExample {
  constructor() {
    this.onClick = () => {
      this.context.toast.showNotification(html`
        <${Notification}
          type="success"
          title="Mission success"
          autoDismiss=${5000}
          dismissable
        >
          The satellite has entered orbit successfully. Data transmission will
          commence shortly.
        <//>
      `);
    };
  }

  render() {
    return html` <${Button} onClick=${this.onClick}>Launch satellite<//> `;
  }
}

const toastStyles = css`
  & {
    inset-block-start: 76px;
  }
`;

export default class Example {
  render() {
    return html`
      <${Toast} className=${toastStyles}>
        <${Center}><${NotificationExample} /><//>
      <//>
    `;
  }
}
