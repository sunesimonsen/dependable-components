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
    h("rect", { width: "4", height: "7", y: "9", rx: "1", ry: "1" }),
    h("rect", { width: "4", height: "11", x: "6", y: "5", rx: "1", ry: "1" }),
    h("rect", { width: "4", height: "15", x: "12", y: "1", rx: "1", ry: "1" }),
  ),
);

export default class BarChartFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
