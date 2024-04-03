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
    { fill: "currentColor" },
    h("rect", { width: "2", height: "2", x: "3", y: "1", rx: ".5", ry: ".5" }),
    h("rect", { width: "2", height: "2", x: "7", y: "1", rx: ".5", ry: ".5" }),
    h("rect", { width: "2", height: "2", x: "3", y: "5", rx: ".5", ry: ".5" }),
    h("rect", { width: "2", height: "2", x: "7", y: "5", rx: ".5", ry: ".5" }),
    h("rect", { width: "2", height: "2", x: "3", y: "9", rx: ".5", ry: ".5" }),
    h("rect", { width: "2", height: "2", x: "7", y: "9", rx: ".5", ry: ".5" }),
  ),
);

export default class Grip12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
