import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import InfoStroke16Icon from "@dependable/icons/InfoStroke16Icon";
import AlertWarningStroke16Icon from "@dependable/icons/AlertWarningStroke16Icon";
import AlertErrorStroke16Icon from "@dependable/icons/AlertErrorStroke16Icon";
import CheckCircleStroke16Icon from "@dependable/icons/CheckCircleStroke16Icon";

const styles = css`
  & {
    display: inline-block;
    vertical-align: middle;
    color: var(--dc-color-error-60);
    font-size: smaller;
    color: var(--dc-text-color-0);
    display: flex;
    align-items: center;
  }

  &[data-type="warning"] {
    color: var(--dc-color-warning-40);
  }

  &[data-type="error"] {
    color: var(--dc-color-error-50);
  }

  &[data-type="success"] {
    color: var(--dc-color-success-40);
  }
`;

const iconStyles = css`
  & {
    width: 16px;
    height: 16px;
    margin-inline-end: var(--dc-spacing-2);
  }
`;

const typeToIcon = {
  info: InfoStroke16Icon,
  warning: AlertWarningStroke16Icon,
  error: AlertErrorStroke16Icon,
  success: CheckCircleStroke16Icon,
};

export class Validation {
  render({ type, className, children }) {
    const Icon = typeToIcon[type];

    return h(
      "div",
      {
        role: "alert",
        "data-type": type,
        className: classes(styles, className),
      },
      h(Icon, { className: iconStyles }),
      children,
    );
  }
}
