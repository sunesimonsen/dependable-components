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
      "stroke-linecap": "round",
      d: "M4 6.5l3.65 3.65a.5.5 0 00.71 0L12 6.5",
    }),
  ),
);

export default class ChevronBoxStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
