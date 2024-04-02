import { html } from "@dependable/htm";
import { clone } from "@dependable/view";
import { observable } from "@dependable/state";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    inset: 20px;
    width: 400px;
    z-index: 1000;
  }

  &[data-placement^="top"] {
    inset-block-end: auto;
  }

  &[data-placement^="bottom"] {
    inset-block-start: auto;
  }

  &[data-placement$="start"] {
    inset-inline-end: auto;
  }

  &[data-placement$="end"] {
    inset-inline-start: auto;
  }

  &[data-placement$="center"] {
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }
`;

class NotificationManager {
  constructor() {
    this.notifications = observable([]);
    this.nextId = 0;
  }

  showNotification(notification) {
    const onDismiss = (id) => {
      this.notifications(
        this.notifications().filter(
          (notification) => notification.props.id !== id,
        ),
      );
    };

    const id = this.nextId++;
    this.notifications([
      ...this.notifications(),
      clone(notification, {
        props: { key: "notification-" + id, id, onDismiss },
      }),
    ]);
  }
}

export class Toast {
  constructor() {
    this.toast = new NotificationManager();
  }

  render({ placement = "top-end", limit = 5, className, children, ...other }) {
    let notifications = this.toast.notifications().slice(-limit);
    if (placement.startsWith("bottom")) {
      notifications = notifications.reverse();
    }

    return html`
      <Context toast=${this.toast}>
        <div
          className=${classes(styles, className)}
          data-placement=${placement}
          ...${other}
        >
          ${notifications}
        </div>
        ${children}
      </Context>
    `;
  }
}
