import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { observable } from "@dependable/state";
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

  render({ id }) {
    return html`
      <${Select} onSelect=${onSelect}>
        <${SelectInput}>${selected().label}<//>
        <${SelectPopup}>${this.renderItems()}<//>
      <//>
    `;
  }
}
