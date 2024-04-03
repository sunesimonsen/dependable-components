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
      d: "M4.13 7.88a4.94 4.94 0 003.74 0",
    }),
  ),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "4", cy: "5", r: "1" }),
    h("circle", { cx: "8", cy: "5", r: "1" }),
  ),
);

export default class SmileSlightStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
