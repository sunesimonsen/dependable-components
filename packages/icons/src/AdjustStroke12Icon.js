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
    h("circle", { cx: "8.5", cy: "7", r: "1.5" }),
    h("circle", { cx: "3.5", cy: "5", r: "1.5" }),
    h("path", { "stroke-linecap": "round", d: "M3.5.5v1m0 7v3m5-11v3m0 7v1" }),
  ),
);

export default class AdjustStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
