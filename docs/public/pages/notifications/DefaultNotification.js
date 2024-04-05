import { html } from "@dependable/htm";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Notification, Toast } from "@dependable/components/Notifications/v0";
import { margin } from "@dependable/components/theming/v0";

import InfoStroke16Icon from "@dependable/icons/InfoStroke16Icon";
import AlertWarningStroke16Icon from "@dependable/icons/AlertWarningStroke16Icon";
import AlertErrorStroke16Icon from "@dependable/icons/AlertErrorStroke16Icon";
import CheckCircleStroke16Icon from "@dependable/icons/CheckCircleStroke16Icon";

const typeToIcon = {
  info: InfoStroke16Icon,
  warning: AlertWarningStroke16Icon,
  error: AlertErrorStroke16Icon,
  success: CheckCircleStroke16Icon,
};

const examples = [
  {
    type: "info",
    title: "Spacewalk Scheduled",
    message:
      "The next extravehicular activity is scheduled for 14:00 UTC. Prepare your spacesuit systems.",
  },
  {
    type: "success",
    title: "Mission success",
    message:
      "The satellite has entered orbit successfully. Data transmission will commence shortly.",
  },
  {
    type: "warning",
    title: "Low Fuel Alert",
    message:
      "The spacecraft has less than 10% fuel remaining. Please plan for refueling at the next station.",
  },
  {
    type: "error",
    title: "Transmission Failure",
    message:
      "An error occurred during data transmission to Ground Control. Please retry or check the communication systems.",
  },
];

class NotificationExample {
  constructor() {
    this.onClick = () => {
      const example = this.props.example;

      this.context.toast.showNotification(html`
        <${Notification}
          type=${example.type}
          title=${example.title}
          autoDismiss=${5000}
          dismissable
        >
          ${example.message}
        <//>
      `);
    };
  }

  render({ example }) {
    const Icon = typeToIcon[example.type];

    return html`
      <${Button} onClick=${this.onClick} stretched>
        <${Icon} className=${margin(1, "inline-end")} /> ${example.type}
      <//>
    `;
  }
}

export default class Example {
  renderNotificationExample(example) {
    return html` <${NotificationExample} example=${example} /> `;
  }

  render() {
    return html`
      <${Toast}>
        <${Center}>
          <${ColumnLayout} columns="2">
            ${examples.map((example) =>
              this.renderNotificationExample(example),
            )}
          <//>
        <//>
      <//>
    `;
  }
}
