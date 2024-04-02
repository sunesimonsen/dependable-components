import { html } from "@dependable/htm";
import { css } from "stylewars";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { Bar } from "@dependable/components/Bar/v0";

const layoutStyles = css`
  & {
    height: 400px;
    text-align: center;
    --dc-bar-border-width: 2px;
  }

  & > * {
    padding: 10px 20px;
  }

  & > [data-layout="top"],
  & > [data-layout="bottom"] {
    color: black;
    --dc-bar-background: hsl(158, 33%, 53%);
    --dc-bar-border-color: hsl(158, 33%, 63%);
  }

  & > [data-layout="start"],
  & > [data-layout="end"] {
    color: black;
    width: 150px;
    --dc-bar-background: hsl(32, 100%, 67%);
    --dc-bar-border-color: hsl(32, 100%, 77%);
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
