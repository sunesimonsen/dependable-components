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
      width: "13",
      height: "13",
      x: "1.5",
      y: "1.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 8.5L7 11l5-5",
    }),
  ),
);

export default class CheckBoxStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
