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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1.23 7.5a.73.73 0 01-.73-.73C.57 5 .79.5 2 .5h5a.5.5 0 01.5.5v6.5s-1 .5-1 3a1 1 0 01-2 0v-3z",
    }),
    h("rect", {
      width: "2",
      height: "7",
      x: "9.5",
      y: ".5",
      rx: ".5",
      ry: ".5",
    }),
  ),
);

export default class ThumbsDownStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
