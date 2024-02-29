import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Switch } from "@dependable/components/Switch/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const rtl = observable(false, { id: "rtl" });

export const dir = computed(() => (rtl() ? "rtl" : "ltr"));

const toggle = (e) => {
  rtl(e.target.checked);
};

export class RTLSwitch {
  render() {
    return html`
      <${ColumnLayout} columns="auto auto" gap="0.7em">
        <label for="styleguide-rtl">Right to left</label>
        <${Switch} id="styleguide-rtl" .checked=${rtl()} onChange=${toggle} />
      <//>
    `;
  }
}
