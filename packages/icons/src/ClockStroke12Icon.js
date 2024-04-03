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
    h("circle", { cx: "6", cy: "6", r: "5.5" }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.5 3v3.5H8",
    }),
  ),
);

export default class ClockStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
