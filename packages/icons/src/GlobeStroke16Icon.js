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
    h("path", { d: "M1.5 4.5h13m-13 7h13" }),
    h("ellipse", { cx: "8", cy: "8", rx: "2.5", ry: "7.5" }),
  ),
);

export default class GlobeStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
