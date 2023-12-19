import { html } from "@dependable/view";
import { css } from "stylewars";
import { computed } from "@dependable/state";
import { observable } from "@dependable/state";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { theme as defaultTheme } from "@dependable/components/default-theme/v0";
import { theme as greenTheme } from "@dependable/components/green-theme/v0";
import { theme as purpleTheme } from "@dependable/components/purple-theme/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const themes = [
  { key: "default", label: "Default", value: defaultTheme },
  { key: "green", label: "Green", value: greenTheme },
  { key: "purple", label: "Purple", value: purpleTheme },
];

const selected = observable(themes[0]);

const onSelect = (e) => {
  selected(e.detail.value);
};

export const activeTheme = computed(() => selected().value);

export class ThemeSelector {
  renderItems() {
    return themes.map(
      (option) => html`
        <${SelectOption}
          key=${option.key}
          selected=${selected() === option}
          value=${option}
        >
          ${option.label}
        <//>
      `,
    );
  }

  render() {
    return html`
      <${ColumnLayout} columns="auto 200px">
        <label for="styleguide-theme">Theme</label>
        <${Select} id="styleguide-theme" onSelect=${onSelect}>
          <${SelectInput}>${selected().label}<//>
          <${SelectPopup}>${this.renderItems()}<//>
        <//>
      <//>
    `;
  }
}
