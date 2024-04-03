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
      d: "M4 9c.4 1.7 2.1 3 4 3s3.6-1.3 4-3",
    }),
  ),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "6", cy: "6", r: "1" }),
    h("circle", { cx: "10", cy: "6", r: "1" }),
  ),
);

export default class SmileyStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
