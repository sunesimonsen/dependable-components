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
    h("path", { "stroke-linecap": "round", d: "M4.5 7V4a3.5 3.5 0 017 0v.5" }),
    h("rect", {
      width: "11",
      height: "8",
      x: "2.5",
      y: "7.5",
      rx: ".5",
      ry: ".5",
    }),
  ),
);

export default class LockUnlockedStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
