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
    h("circle", { cx: "2", cy: "8", r: "2" }),
    h("circle", { cx: "8", cy: "8", r: "2" }),
    h("circle", { cx: "14", cy: "8", r: "2" }),
  ),
);

export default class OverflowFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
