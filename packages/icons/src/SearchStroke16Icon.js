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
    cx: "6",
    cy: "6",
    r: "5.5",
    fill: "none",
    stroke: "currentColor",
  }),
  h("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M15 15l-5-5",
  }),
);

export default class SearchStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
