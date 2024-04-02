import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { RTLSwitch } from "./RTLSwitch.js";
import { ColorSchemeSelector } from "./ColorSchemeSelector.js";
import { ThemeSelector } from "./ThemeSelector.js";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const styles = css`
  & {
    padding: var(--dc-spacing-3) var(--dc-spacing-4);
    width: 240px;
  }
`;

export class Settings {
  render() {
    return html`
      <aside className=${classes(styles)}>
        <${ColumnLayout} stretched justifyItems="start">
          <${RTLSwitch} />
          <${ColorSchemeSelector} />
          <${ThemeSelector} />
        <//>
      </aside>
    `;
  }
}
