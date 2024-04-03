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
    { fill: "none", stroke: "currentColor" },
    h("circle", { cx: "4.5", cy: "6.5", r: "2" }),
    h("circle", { cx: "11.5", cy: "9.5", r: "2" }),
    h("path", { "stroke-linecap": "round", d: "M4.5.5v2m0 8v5m7-15v5m0 8v2" }),
  ),
);

export default class AdjustStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
