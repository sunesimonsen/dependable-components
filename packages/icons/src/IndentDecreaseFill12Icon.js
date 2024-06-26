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
    "stroke-width": "2",
    d: "M10 1H2m8 3H6m4 3H6m4 3H2",
  }),
  h("path", {
    fill: "currentColor",
    d: "M3.5 8c.06 0 .13-.01.19-.04.19-.08.31-.26.31-.46v-4c0-.2-.12-.38-.31-.46a.474.474 0 00-.54.11L1.5 4.79a.996.996 0 000 1.41l1.65 1.65c.09.1.22.15.35.15z",
  }),
);

export default class IndentDecreaseFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
