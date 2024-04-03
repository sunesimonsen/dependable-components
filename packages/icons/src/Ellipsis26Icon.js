import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "7", cy: "13", r: "2" }),
    h("circle", { cx: "13", cy: "13", r: "2" }),
    h("circle", { cx: "19", cy: "13", r: "2" }),
  ),
);

export default class Ellipsis26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
