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
    h("rect", {
      width: "15",
      height: "13",
      x: ".5",
      y: "1.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      "stroke-linejoin": "round",
      d: "M.5 12.5l3-4.5 2 3 4-6 3 4.5 3-4.5",
    }),
  ),
);

export default class LineGraphStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
