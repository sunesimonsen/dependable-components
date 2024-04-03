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
    h("circle", { cx: "7.5", cy: "8.5", r: "7" }),
    h("path", { "stroke-linecap": "round", d: "M7.5 4.5V9" }),
  ),
  h("circle", { cx: "7.5", cy: "12", r: "1", fill: "currentColor" }),
);

export default class AlertErrorStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
