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
    h("circle", { cx: "6", cy: "6", r: "5.5" }),
    h("circle", { cx: "6", cy: "6", r: "2.5" }),
    h("path", { d: "M8 8l2 2M2 2l2 2m0 4l-2 2m8-8L8 4" }),
  ),
);

export default class LifesaverStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
