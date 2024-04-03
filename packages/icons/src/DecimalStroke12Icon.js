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
  h("ellipse", {
    cx: "7",
    cy: "6.5",
    fill: "none",
    stroke: "currentColor",
    rx: "3.5",
    ry: "5",
  }),
  h("circle", { cx: "2", cy: "11", r: "1", fill: "currentColor" }),
);

export default class DecimalStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
