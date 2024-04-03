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
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.5 6l2 2L9 4.5",
    }),
    h("circle", { cx: "6", cy: "6", r: "5.5" }),
  ),
);

export default class CheckCircleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
