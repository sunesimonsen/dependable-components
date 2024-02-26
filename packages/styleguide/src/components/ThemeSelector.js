import { html } from "@dependable/view";
import { css } from "stylewars";
import { computed } from "@dependable/state";
import { observable } from "@dependable/state";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { theme as defaultTheme } from "@dependable/components/default-theme/v0";
import { theme as purpleTheme } from "@dependable/components/purple-theme/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const themes = [
  { key: "default", label: "Default", value: defaultTheme },
  { key: "purple", label: "Purple", value: purpleTheme },
];

const selectedKey = observable(themes[0].key, { id: "selected-theme" });

const selected = computed(() =>
  themes.find((theme) => theme.key === selectedKey()),
);

const onSelect = (e) => {
  selectedKey(e.detail.key);
};

export const activeTheme = computed(() => selected().value);

export class ThemeSelector {
  renderItems() {
    return themes.map(
      (option) => html`
        <${SelectOption}
          key=${option.key}
          selected=${selectedKey() === option.key}
          value=${option}
        >
          ${option.label}
        <//>
      `,
    );
  }

  render() {
    return html`
      <${ColumnLayout} columns="auto 150px" gap="0.7em">
        <label for="styleguide-theme">Theme</label>
        <${Select} id="styleguide-theme" onSelect=${onSelect}>
          <${SelectInput}>${selected().label}<//>
          <${SelectPopup}>${this.renderItems()}<//>
        <//>
      <//>
    `;
  }
}
