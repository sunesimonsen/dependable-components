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
    h("rect", { width: "5", height: "5", rx: "1", ry: "1" }),
    h("rect", { width: "5", height: "5", y: "7", rx: "1", ry: "1" }),
    h("rect", { width: "5", height: "5", x: "7", rx: "1", ry: "1" }),
    h("rect", { width: "5", height: "5", x: "7", y: "7", rx: "1", ry: "1" }),
  ),
);

export default class Grid2x2Fill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
