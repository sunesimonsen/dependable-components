import { html } from "@dependable/view";
import { css } from "stylewars";
import { Link } from "@dependable/nano-router";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ThemeSelector } from "./ThemeSelector.js";
import { RTLSwitch } from "./RTLSwitch.js";
import { ColorSchemeSelector } from "./ColorSchemeSelector.js";
import { RepositoryButton } from "./RepositoryButton.js";
import { Bar } from "@dependable/components/Bar/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { SidebarToggle } from "@dependable/components/Sidebar/v0";

const logoStyles = css`
  & {
    width: var(--dc-logo-size);
    height: var(--dc-logo-size);
  }
`;

const homeStyles = css`
  & {
    display: flex;
    color: var(--dc-color-foreground);
    font-size: 24px;
    text-decoration: none;
    align-items: center;
    gap: var(--dc-spacing-3);
  }

  &:hover {
    background-color: var(--dc-color-neutral-97);
  }

  &:active {
    background-color: var(--dc-color-neutral-95);
  }
`;

const topBarStyles = css`
  & {
    box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
    z-index: 1;
    white-space: nowrap;
  }
`;

export class TopBar {
  render() {
    const { title, logo } = this.context;

    return html`
      <${Bar} className=${topBarStyles} data-layout="top">
        <${ToolbarLayout} sections="start end">
          <div>
            <${SidebarToggle} aria-controls="main-sidebar" />

            <${Link}
              route="index"
              state=${{ scrollToTop: true }}
              className=${homeStyles}
            >
              <img src=${logo} className=${logoStyles} />
              ${title}
            <//>
          </div>
          <div>
            <${RepositoryButton} />
            <${RTLSwitch} />
            <${ColorSchemeSelector} />
            <${ThemeSelector} />
          </div>
        <//>
      <//>
    `;
  }
}
