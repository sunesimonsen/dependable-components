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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  & > [data-layout="top"],
  & > [data-layout="bottom"] {
    height: 30px;
  }

  & > [data-layout="start"],
  & > [data-layout="end"] {
    width: 60px;
  }
`;

export default class Example {
  render() {
    return html`
      <div className=${containerStyles}>
        <${BorderLayout} className=${layoutStyles} stretched>
          <div data-layout="top" style="background: #5eae91" />
          <div data-layout="start" style="background: #ffb057" />
          <div style="background: #daeded">
            <${BorderLayout} className=${layoutStyles} stretched>
              <div data-layout="top" style="background: #aecfc2" />
              <div data-layout="start" style="background: #fed6a8" />
              <div style="background: #daeded" />
              <div data-layout="end" style="background: #fed6a8" />
              <div data-layout="bottom" style="background: #aecfc2" />
            <//>
          </div>
          <div data-layout="end" style="background: #ffb057" />
          <div data-layout="bottom" style="background: #5eae91" />
        <//>
      </div>
    `;
  }
}
