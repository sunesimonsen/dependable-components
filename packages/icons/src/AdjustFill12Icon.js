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
  h("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M3.5.5v1m0 7v3m5-11v3m0 7v1",
  }),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "8.5", cy: "7", r: "2" }),
    h("circle", { cx: "3.5", cy: "5", r: "2" }),
  ),
);

export default class AdjustFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
