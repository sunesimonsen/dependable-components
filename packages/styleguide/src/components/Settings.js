import { h } from "@dependable/view";
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
    return h(
      "aside",
      { className: classes(styles) },
      h(
        ColumnLayout,
        { stretched: true, justifyItems: "start" },
        h(RTLSwitch),
        h(ColorSchemeSelector),
        h(ThemeSelector),
      ),
    );
  }
}
