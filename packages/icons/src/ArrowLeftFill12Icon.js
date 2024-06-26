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
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M1 6.5h10.5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M4.5 11a.47.47 0 01-.35-.15L.5 7.21a.996.996 0 010-1.41l3.65-3.65c.14-.15.35-.19.54-.11.19.08.31.26.31.46v8c0 .2-.12.38-.31.46-.06.03-.13.04-.19.04z",
  }),
);

export default class ArrowLeftFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
