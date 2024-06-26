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
    h("path", {
      "stroke-linejoin": "round",
      d: "M10.77 4.5a.73.73 0 01.73.73C11.43 7 11.21 11.5 10 11.5H5a.5.5 0 01-.5-.5V4.5s1-.5 1-3a1 1 0 012 0v3z",
    }),
    h("rect", {
      width: "2",
      height: "7",
      x: ".5",
      y: "4.5",
      rx: ".5",
      ry: ".5",
    }),
  ),
);

export default class ThumbsUpStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
