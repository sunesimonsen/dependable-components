import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

const availableIngrediences = ["tomatoes", "cucumbers", "lettuce", "beef"];

const selectedIngrediences = observable([]);

const selectedIngrediencesSorted = computed(() =>
  availableIngrediences.filter((id) => selectedIngrediences().includes(id)),
);

const isIngredienceSelected = (id) =>
  computed(() => selectedIngrediences().includes(id));

const toggleIngredience = (id) => () => {
  const selection = selectedIngrediences();
  const selected = selection.includes(id);

  selectedIngrediences(
    selected
      ? selection.filter((v) => v !== id)
      : [id, ...selectedIngrediences()],
  );
};

class SelectedIngredients {
  render() {
    return `Selected:
    ${selectedIngrediencesSorted().join(", ") || "nothing"}`;
  }
}

class IngredientCheckbox {
  render({ id }) {
    const selected = isIngredienceSelected(id);

    return html`
      <${Checkbox}
        id=${id}
        .checked=${selected()}
        onChange=${toggleIngredience(id)}
      />
      <label for=${id}>${id}</label>
    `;
  }
}

class IngredienceList {
  render() {
    return availableIngrediences.map(
      (id) => html`<${IngredientCheckbox} id=${id} />`,
    );
  }
}

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} stretched columns="1" justifyItems="start">
          <h4>Burger ingredients</h4>
          <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
            <${IngredienceList} />
          <//>
          <${SelectedIngredients} />
        <//>
      <//>
    `;
  }
}
