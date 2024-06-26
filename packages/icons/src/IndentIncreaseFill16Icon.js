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
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M2 2h12M8 6h6m-6 4h6M2 14h12",
  }),
  h("path", {
    fill: "currentColor",
    d: "M1.85 4.35l2.94 2.94c.39.39.39 1.02 0 1.41l-2.94 2.94c-.31.32-.85.1-.85-.35V4.71a.5.5 0 01.85-.36z",
  }),
);

export default class IndentIncreaseFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
