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
      d: "M3.5 7.5C4 8.4 4.9 9 6 9s2-.6 2.5-1.5",
    }),
  ),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "4", cy: "5", r: "1" }),
    h("circle", { cx: "8", cy: "5", r: "1" }),
  ),
);

export default class SmileyStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
