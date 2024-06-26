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
    { fill: "none", stroke: "currentColor" },
    h("circle", { cx: "2.5", cy: "5.5", r: "2" }),
    h("circle", { cx: "9.5", cy: "5.5", r: "2" }),
    h("path", { d: "M2.5 7.5h7" }),
  ),
);

export default class VoicemailStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
