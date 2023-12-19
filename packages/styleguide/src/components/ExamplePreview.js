import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { activeTheme } from "./ThemeSelector.js";
import { dir } from "./RTLSwitch.js";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

export class ExamplePreview {
  render({ children, noPadding }) {
    return html`
      <div
        dir=${dir()}
        className=${classes(activeTheme(), !noPadding && paddingStyles)}
      >
        ${children}
      </div>
    `;
  }
}
