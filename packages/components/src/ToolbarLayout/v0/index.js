import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    width: 100%;
    box-sizing: border-box;
  }

  &[data-toolbar-layout="start"],
  &[data-toolbar-layout="center"],
  &[data-toolbar-layout="end"] {
    display: flex;
    gap: var(--dc-toolbar-gap, var(--dc-spacing-3));
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-4));
    align-items: center;
  }

  &[data-toolbar-layout="center"] {
    justify-content: center;
  }

  &[data-toolbar-layout="end"] {
    justify-content: end;
  }

  &[data-toolbar-layout="start end"],
  &[data-toolbar-layout="start center end"] {
    display: grid;
    align-items: stretch;
    justify-items: stretch;
  }

  &[data-toolbar-layout="start end"] {
    grid-template-columns: 1fr 1fr;
  }

  [data-layout="start"] > &[data-toolbar-layout="start end"],
  [data-layout="end"] > &[data-toolbar-layout="start end"] {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  &[data-toolbar-layout="start center end"] {
    grid-template-columns: 1fr auto 1fr;
  }

  [data-layout="start"] > &[data-toolbar-layout="start center end"],
  [data-layout="end"] > &[data-toolbar-layout="start center end"] {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
  }

  &[data-toolbar-layout="start end"] > *,
  &[data-toolbar-layout="start center end"] > * {
    display: flex;
    align-items: var(--dc-toolbar-align-items, center);
    gap: var(--dc-toolbar-gap, var(--dc-spacing-3));
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-4));
  }

  [data-layout="start"] > &,
  [data-layout="end"] > & {
    width: auto;
    height: 100%;
  }

  [data-layout="start"] > &[data-toolbar-layout="start"],
  [data-layout="end"] > &[data-toolbar-layout="start"],
  [data-layout="start"] > &[data-toolbar-layout="center"],
  [data-layout="end"] > &[data-toolbar-layout="center"],
  [data-layout="start"] > &[data-toolbar-layout="end"],
  [data-layout="end"] > &[data-toolbar-layout="end"] {
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-2));
    flex-direction: column;
  }

  [data-layout="start"] > &[data-toolbar-layout="start end"] > *,
  [data-layout="start"] > &[data-toolbar-layout="start center end"] > *,
  [data-layout="end"] > &[data-toolbar-layout="start end"] > *,
  [data-layout="end"] > &[data-toolbar-layout="start center end"] > * {
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-2));
    flex-direction: column;
  }

  &[data-toolbar-layout="start end"] > *:last-child,
  &[data-toolbar-layout="start center end"] > *:last-child {
    justify-content: end;
  }
`;

export class ToolbarLayout {
  render({ children, sections = "start", className, ...other }) {
    return h(
      "div",
      {
        "data-toolbar-layout": sections,
        className: classes(styles, className),
        ...other,
      },
      children,
    );
  }
}
