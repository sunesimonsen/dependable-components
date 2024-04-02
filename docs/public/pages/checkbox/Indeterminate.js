import { html } from "@dependable/htm";
import { observable, computed } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Checkbox } from "@dependable/components/Checkbox/v0";

const indentedStyles = css`
  & {
    margin-inline-start: 1.5em;
  }
`;

const marsMissionReadinessRequirements = [
  "Spacecraft Assembly Completed",
  "Mission Crew Fully Trained",
  "Launch Window Alignment Confirmed",
];

const selectedRequirements = observable([]);

const marsMissionReadiness = computed(() => {
  if (selectedRequirements().length === 0) {
    return "getting-ready";
  }

  return selectedRequirements().length ===
    marsMissionReadinessRequirements.length
    ? "ready"
    : "almost-ready";
});

const toggleMarsMissionReadiness = (e) => {
  const readiness = marsMissionReadiness();
  if (readiness === "ready") {
    selectedRequirements([]);
  } else {
    selectedRequirements(marsMissionReadinessRequirements);
  }
};

const isRequirementSelected = (requirement) =>
  selectedRequirements().includes(requirement);

const toggleRequirement = (requirement) => () => {
  if (isRequirementSelected(requirement)) {
    selectedRequirements(
      selectedRequirements().filter(
        (selectedRequirement) => selectedRequirement !== requirement,
      ),
    );
  } else {
    selectedRequirements([...selectedRequirements(), requirement]);
  }
};

let nextId = 0;

class Requirement {
  render({ requirement }) {
    const id = nextId++;
    const checked = isRequirementSelected(requirement);

    return html`
      <${Checkbox}
        id="requirement-${id}"
        .checked=${checked}
        onChange=${toggleRequirement(requirement)}
      />
      <label for="requirement-${id}">${requirement}</label>
    `;
  }
}

export default class Example {
  renderRequirements() {
    return marsMissionReadinessRequirements.map(
      (requirement) => html`<${Requirement} requirement=${requirement} />`,
    );
  }

  render() {
    return html`
      <${ColumnLayout} columns="auto" justifyItems="start" gap="0.5em">
        <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
          <${Checkbox}
            id="mars-mission-readiness"
            .checked=${marsMissionReadiness() === "ready"}
            indeterminate=${marsMissionReadiness() === "almost-ready"}
            onChange=${toggleMarsMissionReadiness}
          />
          <label for="mars-mission-readiness">Mars Mission Readiness</label>
        <//>

        <${ColumnLayout}
          className=${indentedStyles}
          columns="auto auto"
          justifyItems="start"
          gap="0.5em"
        >
          ${this.renderRequirements()}
        <//>
      <//>
    `;
  }
}
