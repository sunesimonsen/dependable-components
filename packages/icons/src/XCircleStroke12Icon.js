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
    { stroke: "currentColor" },
    h("circle", { cx: "5.5", cy: "6.5", r: "5", fill: "none" }),
    h("path", { "stroke-linecap": "round", d: "M3.5 8.5l4-4m0 4l-4-4" }),
  ),
);

export default class XCircleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
