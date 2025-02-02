import { h } from "@dependable/view";
import { css } from "stylewars";
import XStroke12Icon from "@dependable/icons/XStroke12Icon";
import InfoStroke16Icon from "@dependable/icons/InfoStroke16Icon";
import AlertWarningStroke16Icon from "@dependable/icons/AlertWarningStroke16Icon";
import AlertErrorStroke16Icon from "@dependable/icons/AlertErrorStroke16Icon";
import CheckCircleStroke16Icon from "@dependable/icons/CheckCircleStroke16Icon";

const containerStyles = css`
  & {
    position: relative;
    border: 1px solid var(--dc-color-neutral-80);
    border-radius: 4px;
    box-shadow: rgba(23, 73, 77, 0.15) 0px 20px 28px 0px;
    padding: 20px 40px;
    line-height: 1.4em;
    font-size: 14px;
    background-color: var(--dc-color-background);
    color: var(--dc-text-color-0);
  }

  &[data-type="warning"] > header {
    color: var(--dc-color-warning-40);
  }

  &[data-type="error"] > header {
    color: var(--dc-color-error-50);
  }

  &[data-type="success"] > header {
    color: var(--dc-color-success-40);
  }
`;

const closeStyles = css`
  & {
    display: block;
    position: absolute;
    inset-inline-end: 4px;
    inset-block-start: 4px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    padding: 0px;
    width: 28px;
    height: 28px;
    overflow: hidden;
    color: var(--dc-color-foreground);
    font-size: 0px;
    user-select: none;
  }

  &:hover {
    color: var(--dc-color-neutral-40);
  }
`;

const iconStyles = css`
  & {
    position: absolute;
    inset-inline-start: 16px;
    margin-top: 2px;
  }
`;

const typeToIcon = {
  info: InfoStroke16Icon,
  warning: AlertWarningStroke16Icon,
  error: AlertErrorStroke16Icon,
  success: CheckCircleStroke16Icon,
};

export class Notification {
  constructor() {
    this.onDismiss = () => {
      clearTimeout(this.timer);

      if (this.props.onDismiss) {
        this.props.onDismiss(this.props.id);
      }
    };
  }

  renderClose() {
    return h(
      "button",
      {
        "aria-label": "Close Notification",
        className: closeStyles,
        onClick: this.onDismiss,
      },
      h(XStroke12Icon, null),
    );
  }

  didMount() {
    const { autoDismiss, onDismiss } = this.props;

    if (onDismiss && typeof autoDismiss === "number") {
      this.timeout = setTimeout(this.onDismiss, autoDismiss);
    }
  }

  render({ type = "info", title, dismissable = false, children }) {
    const Icon = typeToIcon[type];

    return h(
      "div",
      { role: "status", "data-type": type, className: containerStyles },
      h(
        "header",
        {},
        h(Icon, { className: iconStyles }),
        h("strong", {}, title),
        dismissable && this.renderClose(),
      ),
      h("div", {}, children),
    );
  }
}
