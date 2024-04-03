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
  h("circle", {
    cx: "7.5",
    cy: "8.5",
    r: "7",
    fill: "none",
    stroke: "currentColor",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M7.5 4.5v8m4-4h-8",
  }),
);

export default class PlusCircleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
