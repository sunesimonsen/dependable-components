import { html } from "@dependable/view";
import { css } from "stylewars";
import { Link } from "@dependable/nano-router";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ThemeSelector } from "./ThemeSelector.js";

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
    color: black;
    font-size: 24px;
    text-decoration: none;
    padding: 8px 16px;
  }

  &:hover {
    background-color: rgba(47, 57, 65, 0.05);
  }

  &:active {
    background-color: rgba(47, 57, 65, 0.2);
  }
`;

const buttonsStyles = css`
  & {
    padding: 0 20px;
  }
`;

const topBarStyles = css`
  & {
    grid-area: top;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    background: var(--dc-color-neutral-0);
    position: relative;
    box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
    z-index: 1;
  }
`;

export class TopBar {
  render() {
    const { title, logo } = this.context;

    return html`
      <header className=${topBarStyles}>
        <${Link}
          route="index"
          state=${{ scrollToTop: true }}
          className=${homeStyles}
        >
          <img src=${logo} className=${logoStyles} />
          <span className=${brandStyles}>${title}</span>
        <//>
        <${ColumnLayout}
          className=${buttonsStyles}
          columns="auto 200px"
          justifyItems="end"
        >
          <label for="styleguide-theme">Theme</label>
          <${ThemeSelector} id="styleguide-theme" />
        <//>
      </header>
    `;
  }
}
