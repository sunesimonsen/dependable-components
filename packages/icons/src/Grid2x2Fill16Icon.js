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
    { fill: "currentColor" },
    h("rect", { width: "7", height: "7", rx: "1", ry: "1" }),
    h("rect", { width: "7", height: "7", y: "9", rx: "1", ry: "1" }),
    h("rect", { width: "7", height: "7", x: "9", rx: "1", ry: "1" }),
    h("rect", { width: "7", height: "7", x: "9", y: "9", rx: "1", ry: "1" }),
  ),
);

export default class Grid2x2Fill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
