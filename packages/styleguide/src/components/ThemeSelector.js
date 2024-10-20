import { h } from "@dependable/view";
import { computed } from "@dependable/state";
import { observable } from "@dependable/state";
import { theme as defaultTheme } from "@dependable/components/default-theme/v0";
import { theme as purpleTheme } from "@dependable/components/purple-theme/v0";
import { theme as brownTheme } from "@dependable/components/brown-theme/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const themes = [
  { key: "default", label: "Default", value: defaultTheme },
  { key: "purple", label: "Purple", value: purpleTheme },
  { key: "brown", label: "Brown", value: brownTheme },
];

const selectedKey = observable(themes[0].key, {
  id: "selected-theme",
});

const selected = computed(() =>
  themes.find((theme) => theme.key === selectedKey()),
);

const onSelectItem = (e) => {
  selectedKey(e.detail.key);
};

export const activeTheme = computed(() => selected().value);

export class ThemeSelector {
  renderItems() {
    return themes.map((option) =>
      h(
        SelectOption,
        {
          key: option.key,
          selected: selectedKey() === option.key,
          value: option,
        },
        option.label,
      ),
    );
  }

  render() {
    return h(
      FieldLayout,
      { width: "100%" },
      h("label", { for: "styleguide-theme" }, "Theme"),
      h(
        Select,
        { id: "styleguide-theme", onSelectItem: onSelectItem },
        h(SelectInput, {}, selected().label),
        h(SelectPopup, {}, this.renderItems()),
      ),
    );
  }
}
