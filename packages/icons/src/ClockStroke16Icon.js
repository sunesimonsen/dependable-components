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
    h("circle", { cx: "8", cy: "8", r: "7.5" }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 3v5.5H11",
    }),
  ),
);

export default class ClockStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
