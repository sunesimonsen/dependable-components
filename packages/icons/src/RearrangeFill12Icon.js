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
    h("rect", { width: "10", height: "3", rx: "1", ry: "1" }),
    h("rect", { width: "10", height: "3", x: "2", y: "4", rx: "1", ry: "1" }),
    h("rect", { width: "10", height: "3", y: "8", rx: "1", ry: "1" }),
  ),
);

export default class RearrangeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
