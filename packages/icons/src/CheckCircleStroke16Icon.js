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
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 9l2.5 2.5 5-5",
    }),
    h("circle", { cx: "7.5", cy: "8.5", r: "7" }),
  ),
);

export default class CheckCircleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
