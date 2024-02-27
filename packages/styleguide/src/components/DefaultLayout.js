import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { css, classes } from "stylewars";
import { TopBar } from "./TopBar.js";
import { Sidebar } from "./Sidebar.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { ScrollArea } from "@dependable/components/ScrollArea/v0";
import { activeTheme } from "./ThemeSelector.js";

const rootStyles = css`
  & {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
  }
`;

const mainStyles = css`
  & {
    grid-area: main;
    display: flex;
    flex-direction: column;
    background: var(--dc-color-background);
    overflow: hidden;
  }

  & > h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 44px;
    font-size: 36px;
    font-weight: 600;
  }

  & > h3 {
    margin-bottom: 12px;
    line-height: 32px;
    font-size: 26px;
  }

  & p > code {
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    line-height: normal;
    font-size: calc(1em - 1px);
    border-radius: 2px;
    padding: 1.5px;
    background-color: var(--dc-color-neutral-80);
    color: var(--dc-color-foreground);
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
      <div className=${classes(activeTheme(), rootStyles)}>
        <${BorderLayout} stretched>
          <${TopBar} />
          <${Sidebar} />
          <main className=${mainStyles}>
            <${ScrollArea} className=${scrollAreaStyles}>
              <${ErrorBoundary} name="default-layout">${children}<//>
            <//>
          </main>
        <//>
      </div>
    `;
  }
}
