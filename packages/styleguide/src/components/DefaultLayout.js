import { html } from "@dependable/view";
import { css } from "stylewars";
import { TopBar } from "./TopBar.js";
import { Sidebar } from "./Sidebar.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { ScrollArea } from "@dependable/components/ScrollArea/v0";

const rootStyles = css`
  & {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    font-family: Verdana, Geneva, sans-serif;

    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      Arial,
      sans-serif;

    color: rgb(3, 54, 61);
  }
`;

const mainStyles = css`
  & {
    grid-area: main;
    display: flex;
    flex-direction: column;
    background: white;
    overflow: hidden;
  }

  & h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 44px;
    font-size: 36px;
    font-weight: 600;
  }

  & h3 {
    margin-bottom: 12px;
    line-height: 32px;
    font-size: 26px;
  }

  & code {
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
  }

  & code.inline {
    line-height: normal;
    font-size: calc(1em - 1px);
    direction: ltr;
    border-radius: 2px;
    padding: 1.5px;
    background-color: rgb(233, 235, 237);
    color: rgb(73, 84, 92);
    margin: 0 0.7ex;
  }
`;

const scrollAreaStyles = css`
  & {
    flex: 1;
  }
`;

export class DefaultLayout {
  render({ children }) {
    return html`
      <${BorderLayout} stretched className=${rootStyles}>
        <${TopBar} />
        <${Sidebar} />
        <main className=${mainStyles}>
          <${ScrollArea} className=${scrollAreaStyles}>
            <${ErrorBoundary} name="default-layout">${children}<//>
          <//>
        </main>
      <//>
    `;
  }
}
