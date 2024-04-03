import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    focusable: "false",
    viewBox: "0 0 12 12",
  },
  h(
    "g",
    { fill: "none", stroke: "currentColor", "stroke-width": "2" },
    h("circle", { cx: "2.8", cy: "5.2", r: "1.8" }),
    h("circle", { cx: "9.2", cy: "5.2", r: "1.8" }),
    h("path", { d: "M2.5 7h7" }),
  ),
);

export default class VoicemailFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
