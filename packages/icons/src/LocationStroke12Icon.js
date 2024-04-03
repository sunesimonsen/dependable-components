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
    h("circle", { cx: "6", cy: "5", r: "1.5" }),
    h("path", {
      "stroke-linejoin": "round",
      d: "M6 .5a4.39 4.39 0 00-4.5 4.27c0 1.59.72 2.42 1.64 3.58s2 2.18 2.86 3.14c.87-1 2-2 2.85-3.14s1.65-2 1.65-3.58A4.59 4.59 0 006 .5z",
    }),
  ),
);

export default class LocationStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
