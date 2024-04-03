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
    h("circle", { cx: "8", cy: "8", r: "7.5" }),
    h("circle", { cx: "8", cy: "8", r: "3.5" }),
    h("path", { d: "M10.5 10.5l3 3m-11-11l3 3m0 5l-3 3m11-11l-3 3" }),
  ),
);

export default class LifesaverStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
