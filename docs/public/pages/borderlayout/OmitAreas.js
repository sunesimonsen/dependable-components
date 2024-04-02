import { html } from "@dependable/htm";
import { css } from "stylewars";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const layoutStyles = css`
  & [data-layout] {
    padding: 10px 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  & [data-layout="top"],
  & [data-layout="bottom"] {
    background: #5eae91;
  }

  & [data-layout="start"],
  & [data-layout="end"] {
    background: #ffb057;
  }

  & [data-layout="main"] {
    background: #daeded;
    height: 60px;
  }
`;

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="4" stretched className=${layoutStyles}>
        <${BorderLayout} stretched>
          <div data-layout="main" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="start" />
          <div data-layout="main" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="main" />
          <div data-layout="end" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="end" />
        <//>

        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="main" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="start" />
          <div data-layout="main" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="main" />
          <div data-layout="end" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="end" />
        <//>

        <${BorderLayout} stretched>
          <div data-layout="main" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="main" />
          <div data-layout="end" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="end" />
          <div data-layout="bottom" />
        <//>

        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="main" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="main" />
          <div data-layout="end" />
          <div data-layout="bottom" />
        <//>
        <${BorderLayout} stretched>
          <div data-layout="top" />
          <div data-layout="start" />
          <div data-layout="main" />
          <div data-layout="end" />
          <div data-layout="bottom" />
        <//>
      <//>
    `;
  }
}
