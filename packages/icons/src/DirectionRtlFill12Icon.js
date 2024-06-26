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
    fill: "currentColor",
    d: "M3.5 2.5A2.5 2.5 0 006 5V0a2.5 2.5 0 00-2.5 2.5zm-1 9.5c.06 0 .13-.01.19-.04.19-.08.31-.26.31-.46v-4c0-.2-.12-.38-.31-.46a.474.474 0 00-.54.11L.5 8.79a.996.996 0 000 1.41l1.65 1.65c.09.1.22.15.35.15z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M8.5 7.5V1c0-.28-.22-.5-.5-.5H6.5v7m-5 2h10",
  }),
);

export default class DirectionRtlFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
