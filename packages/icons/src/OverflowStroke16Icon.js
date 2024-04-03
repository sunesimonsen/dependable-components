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
    h("circle", { cx: "2.5", cy: "8", r: "1.5" }),
    h("circle", { cx: "8", cy: "8", r: "1.5" }),
    h("circle", { cx: "13.5", cy: "8", r: "1.5" }),
  ),
);

export default class OverflowStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
