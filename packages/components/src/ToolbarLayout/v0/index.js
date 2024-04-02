import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { ColumnLayout } from "../../ColumnLayout/v0";

const styles = css`
  & {
    width: 100%;
    box-sizing: border-box;
  }

  &[data-toolbar-layout="start"],
  &[data-toolbar-layout="end"] {
    display: flex;
    gap: var(--dc-toolbar-gap, var(--dc-spacing-3));
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-4));
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

  &[data-toolbar-layout="start center end"] {
    grid-template-columns: 1fr auto 1fr;
  }

  &[data-toolbar-layout="start end"] > *,
  &[data-toolbar-layout="start center end"] > * {
    display: flex;
    align-items: center;
    gap: var(--dc-toolbar-gap, var(--dc-spacing-3));
    padding: var(--dc-toolbar-padding, var(--dc-spacing-3) var(--dc-spacing-4));
  }

  &[data-toolbar-layout="start end"] > *:last-child,
  &[data-toolbar-layout="start center end"] > *:last-child {
    justify-content: end;
  }
`;

const columnsMapping = {
  "start center end": "1fr auto 1fr",
  "start end": "1fr 1fr",
  start: "1fr",
  end: "1fr",
};

export class ToolbarLayout {
  render({ children, sections = "start", className, ...other }) {
    return html`
      <div
        data-toolbar-layout=${sections}
        className=${classes(styles, className)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}
