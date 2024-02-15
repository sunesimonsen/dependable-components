import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

const availableParts = [
  "Telescope",
  "Spectrometer",
  "Lander",
  "Rover",
  "Communications System",
];

const selectedParts = observable([]);

const selectedPartsSorted = computed(() =>
  availableParts.filter((id) => selectedParts().includes(id)),
);

const isPartSelected = (id) => computed(() => selectedParts().includes(id));

const togglePart = (id) => () => {
  const selection = selectedParts();
  const selected = selection.includes(id);

  selectedParts(
    selected ? selection.filter((v) => v !== id) : [id, ...selectedParts()],
  );
};

class SelectedParts {
  render() {
    return `Selected:
    ${selectedPartsSorted().join(", ") || "Nothing"}`;
  }
}

class PartCheckbox {
  render({ id }) {
    const selected = isPartSelected(id);

    return html`
      <${Checkbox} id=${id} .checked=${selected()} onChange=${togglePart(id)} />
      <label for=${id}>${id}</label>
    `;
  }
}

class IngredienceList {
  render() {
    return availableParts.map((id) => html`<${PartCheckbox} id=${id} />`);
  }
}

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} stretched columns="1" justifyItems="start">
          <h4>Choose Spacecraft Technologies:</h4>
          <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
            <${IngredienceList} />
          <//>
          <${SelectedParts} />
        <//>
      <//>
    `;
  }
}
