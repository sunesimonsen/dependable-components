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
    h("rect", { width: "3", height: "4", y: "7", rx: "1", ry: "1" }),
    h("rect", { width: "3", height: "7", x: "4", y: "4", rx: "1", ry: "1" }),
    h("rect", { width: "3", height: "10", x: "8", y: "1", rx: "1", ry: "1" }),
  ),
);

export default class BarChartFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
