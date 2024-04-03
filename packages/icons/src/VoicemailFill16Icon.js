import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    focusable: "false",
    viewBox: "0 0 16 16",
  },
  h(
    "g",
    { fill: "none", stroke: "currentColor", "stroke-width": "2" },
    h("circle", { cx: "3.5", cy: "7.5", r: "2.5" }),
    h("circle", { cx: "12.5", cy: "7.5", r: "2.5" }),
    h("path", { d: "M3.5 10h9" }),
  ),
);

export default class VoicemailFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
