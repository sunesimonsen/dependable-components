import { html } from "@dependable/htm";
import { observable, computed } from "@dependable/state";
import { Switch } from "@dependable/components/Switch/v0";

const rtl = observable(false, { id: "rtl" });

export const dir = computed(() => (rtl() ? "rtl" : "ltr"));

const toggle = (e) => {
  rtl(e.target.checked);
};

export class RTLSwitch {
  render() {
    return html`
      <label for="styleguide-rtl">Right to left</label>
      <${Switch} id="styleguide-rtl" .checked=${rtl()} onChange=${toggle} />
    `;
  }
}
