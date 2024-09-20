import { h } from "@dependable/view";
import { ColumnLayout } from "../../ColumnLayout/v0";
import { classes } from "stylewars";
import { width } from "../../theming/v0";

export class FieldLayout {
  render({ children, width: widthValue, className, ...other }) {
    return h(
      ColumnLayout,
      {
        justifyItems: "start",
        gap: "var(--dc-spacing-2)",
        className: classes(width(widthValue), className),
        ...other,
      },
      children,
    );
  }
}
