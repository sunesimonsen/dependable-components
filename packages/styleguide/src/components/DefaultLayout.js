import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { css, classes } from "stylewars";
import { TopBar } from "./TopBar.js";
import { SidebarContent } from "./SidebarContent.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { SidebarLayout, Sidebar } from "@dependable/components/Sidebar/v0";
import { ScrollArea } from "@dependable/components/ScrollArea/v0";
import { activeTheme } from "./ThemeSelector.js";
import { Settings } from "./Settings.js";

const rootStyles = css`
  & {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    --dc-sidebar-initial-display: flex;
    --dc-logo-size: 48px;
  }

  @media screen and (max-width: 1200px) {
    & {
      --dc-sidebar-display: none;
      --dc-sidebar-toggle-display: inline-flex;
      --dc-logo-size: 40px;
    }
  }
`;

const mainStyles = css`
  & {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: var(--dc-color-background);
    line-height: 1.5em;
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
    padding: 1.5px 1px;
    background-color: var(--dc-color-neutral-90);
    color: var(--dc-color-foreground);
  }
`;

const scrollAreaStyles = css`
  & {
    flex: 1;
  }
`;

const mainSidebarStyles = css`
  & {
    overflow: hidden;
  }
`;

const settingsSidebarStyles = css`
  & {
    --dc-sidebar-display: none;
  }
`;

export class DefaultLayout {
  render({ children }) {
    return html`
      <div className=${classes(activeTheme(), rootStyles)}>
        <${SidebarLayout}>
          <${TopBar} />
          <${Sidebar}
            data-layout="start"
            id="main-sidebar"
            className=${mainSidebarStyles}
          >
            <${ScrollArea} className=${scrollAreaStyles}>
              <${SidebarContent} />
            <//>
          <//>
          <main className=${mainStyles}>
            <${ScrollArea} className=${scrollAreaStyles}>
              <${ErrorBoundary} name="default-layout">${children}<//>
            <//>
          </main>
          <${Sidebar}
            className=${settingsSidebarStyles}
            data-layout="end"
            id="settings-sidebar"
          >
            <${Settings} />
          <//>
        <//>
      </div>
    `;
  }
}
