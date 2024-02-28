import { html } from "@dependable/view";
import { css } from "stylewars";
import { Link } from "@dependable/nano-router";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ThemeSelector } from "./ThemeSelector.js";
import { RTLSwitch } from "./RTLSwitch.js";
import { ColorSchemeSelector } from "./ColorSchemeSelector.js";
import { RepositoryButton } from "./RepositoryButton.js";
import { Bar } from "@dependable/components/Bar/v0";

const logoStyles = css`
  & {
    width: 48px;
    height: 48px;
  }
`;

const brandStyles = css`
  & {
    margin: 0 10px;
  }
`;

const homeStyles = css`
  & {
    display: flex;
    align-items: center;
    color: var(--dc-color-foreground);
    font-size: 24px;
    text-decoration: none;
    padding: 8px 16px;
  }

  &:hover {
    background-color: var(--dc-color-neutral-97);
  }

  &:active {
    background-color: var(--dc-color-neutral-95);
  }
`;

const buttonsStyles = css`
  & {
    display: flex;
    padding: 0 20px;
    justify-content: end;
    align-items: center;
    gap: 20px;
  }
`;

const topBarStyles = css`
  & {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    position: relative;
    box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
    z-index: 1;
  }
`;

export class TopBar {
  render() {
    const { title, logo } = this.context;

    return html`
      <${Bar} className=${topBarStyles} data-layout="top">
        <${Link}
          route="index"
          state=${{ scrollToTop: true }}
          className=${homeStyles}
        >
          <img src=${logo} className=${logoStyles} />
          <span className=${brandStyles}>${title}</span>
        <//>
        <div className=${buttonsStyles}>
          <${RepositoryButton} />
          <${RTLSwitch} />
          <${ColorSchemeSelector} />
          <${ThemeSelector} />
        </div>
      <//>
    `;
  }
}
