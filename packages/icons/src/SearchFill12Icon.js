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
    cx: "4.5",
    cy: "4.5",
    r: "3.5",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
  }),
  h("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M11 11L7.5 7.5",
  }),
);

export default class SearchFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
