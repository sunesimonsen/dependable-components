import { h } from "@dependable/view";
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
    width: var(--dc-notifications-width, 400px);
    z-index: 1000;
  }

  @media screen and (max-width: 500px) {
    & {
      width: 80vw;
    }
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
        props: {
          key: "notification-" + id,
          id,
          onDismiss,
        },
      }),
    ]);
  }
}

class Notifications {
  render({ placement = "top-end", limit = 5, className, ...other }) {
    let notifications = this.context.toast.notifications().slice(-limit);

    if (placement.startsWith("bottom")) {
      notifications = notifications.reverse();
    }

    return h(
      "div",
      {
        className: classes(styles, className),
        "data-placement": placement,
        ...other,
      },
      notifications,
    );
  }
}

export class Toast {
  constructor() {
    this.toast = new NotificationManager();
  }

  render({ children, ...other }) {
    return h(
      "Context",
      { toast: this.toast },
      h(Notifications, other),
      children,
    );
  }
}
