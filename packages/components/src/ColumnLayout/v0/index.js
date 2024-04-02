import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = ({ gap, stretched, columns, alignItems, justifyItems }) => {
  const gridTemplateColumns =
    typeof columns === "number" || columns.match(/^\d+$/)
      ? `repeat(${columns}, 1fr)`
      : columns;
  return css`
    & {
      display: ${stretched ? "grid" : "inline-grid"};
      ${stretched ? "width: 100%;" : ""}
      gap: ${gap};
      align-items: ${alignItems};
      justify-items: ${justifyItems};
      grid-template-columns: ${gridTemplateColumns};
      box-sizing: border-box;
    }
  `;
};

export class ColumnLayout {
  render({
    gap = "var(--dc-spacing-3)",
    columns = 1,
    stretched,
    alignItems = "center",
    justifyItems = "center",
    className,
    children,
    ...other
  }) {
    return h(
      "div",
      {
        className: classes(
          styles({ gap, stretched, columns, alignItems, justifyItems }),
          className,
        ),
        ...other,
      },
      children,
    );
  }
}
