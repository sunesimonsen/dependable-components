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
      width: "14.142",
      height: "7.071",
      x: ".929",
      y: "4.465",
      rx: ".5",
      ry: ".5",
      transform: "rotate(-45 8 8)",
    }),
    h("path", {
      "stroke-linecap": "round",
      d: "M5.577 5.577l4.673 4.673M8.5 15.5h7",
    }),
  ),
);

export default class EraserStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
