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
    { stroke: "currentColor" },
    h("circle", { cx: "5.5", cy: "6.5", r: "5", fill: "none" }),
    h("path", { "stroke-linecap": "round", d: "M5.5 9.5v-3" }),
  ),
  h("circle", { cx: "5.5", cy: "4", r: "1", fill: "currentColor" }),
);

export default class InfoStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
