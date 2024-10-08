import { h } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";

const options = [
  { key: "auto", label: "Auto" },
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" },
];

export const colorScheme = observable(options[0].key, {
  id: "selected-color-scheme",
});

const selected = computed(() =>
  options.find((option) => option.key === colorScheme()),
);

const onSelectItem = (e) => {
  colorScheme(e.detail.key);
};

export class ColorSchemeSelector {
  renderItems() {
    return options.map((option) =>
      h(
        SelectOption,
        {
          key: option.key,
          selected: colorScheme() === option.key,
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
      h("label", { for: "styleguide-color-scheme" }, "Color scheme"),
      h(
        Select,
        { id: "styleguide-color-scheme", onSelectItem: onSelectItem },
        h(SelectInput, {}, selected().label),
        h(SelectPopup, {}, this.renderItems()),
      ),
    );
  }
}
