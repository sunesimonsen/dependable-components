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
  h("circle", { cx: "7.5", cy: "13.5", r: "1", fill: "currentColor" }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M7.5 10.5V9.4c0-1 .6-1.8 1.4-2.3 1.1-.6 1.8-1.8 1.6-3.1-.3-1.3-1.2-2.2-2.5-2.5-1.5-.3-2.9.6-3.4 2",
  }),
);

export default class QuestionMarkStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
