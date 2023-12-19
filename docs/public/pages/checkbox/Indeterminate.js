import { html } from "@dependable/view";
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

const pestResistant = observable(false);
const needsDirectLight = observable(true);

const outdoorReadinessIndetermine = computed(
  () => pestResistant() !== needsDirectLight(),
);

const outdoorReadinessChecked = computed(
  () => pestResistant() && needsDirectLight(),
);

const onChange = (e) => {
  switch (e.target.id) {
    case "outdoor-readiness":
      const checked = e.target.checked || e.target.indeterminate;
      pestResistant(checked);
      needsDirectLight(checked);
      break;
    case "pest-resistant":
      pestResistant(e.target.checked);
      break;
    case "needs-direct-light":
      needsDirectLight(e.target.checked);
      break;
  }
};

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto" justifyItems="start" gap="0.5em">
          <${ColumnLayout} columns="auto auto" justifyItems="start" gap="0.5em">
            <${Checkbox}
              id="outdoor-readiness"
              .checked=${outdoorReadinessChecked()}
              indeterminate=${outdoorReadinessIndetermine()}
              onChange=${onChange}
            />
            <label for="outdoor-readiness">Outdoor readiness</label>
          <//>

          <${ColumnLayout}
            className=${indentedStyles}
            columns="auto auto"
            justifyItems="start"
            gap="0.5em"
          >
            <${Checkbox}
              id="pest-resistant"
              .checked=${pestResistant()}
              onChange=${onChange}
            />
            <label for="pest-resistant">Pest resistant</label>
            <${Checkbox}
              id="needs-direct-light"
              .checked=${needsDirectLight()}
              onChange=${onChange}
            />
            <label for="needs-direct-light">Needs direct light</label>
          <//>
        <//>
      <//>
    `;
  }
}
