import { h } from "@dependable/view";
import { css } from "stylewars";
import { Link } from "@dependable/nano-router";
import { RepositoryButton } from "./RepositoryButton.js";
import { Bar } from "@dependable/components/Bar/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { SidebarToggle } from "@dependable/components/Sidebar/v0";
import { ToggleSettingsButton } from "./ToggleSettingsButton.js";

const logoStyles = css`
  & {
    width: var(--dc-logo-size);
    height: var(--dc-logo-size);
  }

  @media screen and (max-width: 1200px) {
    & {
      width: 26px;
      height: 26px;
    }
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

  @media screen and (max-width: 1200px) {
    & {
      font-size: 18px;
      gap: var(--dc-spacing-2);
    }
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

    return h(
      Bar,
      { className: topBarStyles, "data-layout": "top" },
      h(
        ToolbarLayout,
        { sections: "start end" },
        h(
          "div",
          {},
          h(SidebarToggle, {
            pill: true,
            basic: true,
            "aria-controls": "main-sidebar",
          }),
          h(
            Link,
            {
              route: "index",
              state: { scrollToTop: true },
              className: homeStyles,
            },
            h("img", { src: logo, className: logoStyles }),
            title,
          ),
        ),
        h(
          "div",
          {},
          h(RepositoryButton),
          h(ToggleSettingsButton, { "aria-controls": "settings-sidebar" }),
        ),
      ),
    );
  }
}
