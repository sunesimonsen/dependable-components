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
    d: "M1 8.5h14.5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M5.15 13.65L.71 9.21a.996.996 0 010-1.41l4.44-4.44c.31-.32.85-.1.85.35v9.59a.5.5 0 01-.85.35z",
  }),
);

export default class ArrowLeftFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
