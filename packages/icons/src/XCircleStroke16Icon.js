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
    h("circle", { cx: "7.5", cy: "8.5", r: "7" }),
    h("path", { "stroke-linecap": "round", d: "M4.5 11.5l6-6m0 6l-6-6" }),
  ),
);

export default class XCircleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
