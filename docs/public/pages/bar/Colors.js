import { html } from "@dependable/view";
import { css } from "stylewars";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { Bar } from "@dependable/components/Bar/v0";

const layoutStyles = css`
  & {
    height: 400px;
    text-align: center;
    --dc-bar-border-width: 6px;
    --dc-bar-border-style: inset;
  }

  & > * {
    padding: 10px 20px;
  }

  & > [data-layout="top"],
  & > [data-layout="bottom"] {
    color: var(--dc-color-primary-20);
    --dc-bar-background: var(--dc-color-primary-70);
    --dc-bar-border-color: var(--dc-color-primary-60);
  }

  & > [data-layout="start"],
  & > [data-layout="end"] {
    color: var(--dc-color-primary-90);
    --dc-bar-background: var(--dc-color-primary-40);
    --dc-bar-border-color: var(--dc-color-primary-50);
  }
`;

export default class Example {
  render() {
    return html`
      <${BorderLayout} stretched className=${layoutStyles}>
        <${Bar} data-layout="top">Top<//>
        <${Bar} data-layout="start">Start<//>
        <${Bar} data-layout="end">End<//>
        <${Bar} data-layout="bottom">Bottom<//>
      <//>
    `;
  }
}
