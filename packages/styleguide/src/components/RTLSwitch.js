import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Switch } from "@dependable/components/Switch/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const rtl = observable(false);

export const dir = computed(() => (rtl() ? "rtl" : "ltr"));

const toggleRTL = (e) => {
  rtl(e.target.checked);
};

export class RTLSwitch {
  render() {
    return html`
      <${ColumnLayout} columns="auto auto">
        <label for="styleguide-rtl">RTL</label>
        <${Switch}
          id="styleguide-rtl"
          .checked=${rtl()}
          onChange=${toggleRTL}
        />
      <//>
    `;
  }
}
