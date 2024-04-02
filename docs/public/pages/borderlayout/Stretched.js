import { html } from "@dependable/htm";
import { css } from "stylewars";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";

const containerStyles = css`
  & {
    height: 300px;
  }
`;

const layoutStyles = css`
  & > * {
    padding: 10px 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
`;

export default class Example {
  render() {
    return html`
      <div className=${containerStyles}>
        <${BorderLayout} className=${layoutStyles} stretched>
          <div data-layout="top" style="background: #5eae91">Top</div>
          <div data-layout="start" style="background: #ffb057">Start</div>
          <div style="background: #daeded">Main</div>
          <div data-layout="end" style="background: #ffb057">End</div>
          <div data-layout="bottom" style="background: #5eae91">Bottom</div>
        <//>
      </div>
    `;
  }
}
