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
    h("circle", { cx: "8", cy: "6.5", r: "2" }),
    h("path", {
      "stroke-linejoin": "round",
      d: "M8 .5a5.9 5.9 0 00-6 5.83c0 2.17 1 3.3 2.19 4.89s2.64 3 3.8 4.28c1.17-1.31 2.62-2.76 3.81-4.28S14 8.5 14 6.33A6.19 6.19 0 008 .5z",
    }),
  ),
);

export default class LocationStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
