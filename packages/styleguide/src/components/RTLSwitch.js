import { h } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { Switch } from "@dependable/components/Switch/v0";

const rtl = observable(sessionStorage.getItem("styleguide-dir") === "rtl", {
  id: "rtl",
});

export const dir = computed(() => (rtl() ? "rtl" : "ltr"));

const toggle = (e) => {
  sessionStorage.setItem("styleguide-dir", e.target.checked ? "rtl" : "ltr");
  rtl(e.target.checked);
};

export class RTLSwitch {
  render() {
    return [
      h("label", { for: "styleguide-rtl" }, "Right to left"),
      h(Switch, { id: "styleguide-rtl", ".checked": rtl(), onChange: toggle }),
    ];
  }
}
