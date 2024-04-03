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
  h("circle", {
    cx: "5.5",
    cy: "6.5",
    r: "5",
    fill: "none",
    stroke: "currentColor",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M5.5 3.5v6m3-3h-6",
  }),
);

export default class PlusCircleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
