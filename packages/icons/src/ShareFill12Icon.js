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
    d: "M5.5 7.5V1m2 3.5H10c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5H1c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5h2.5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M8 2.5c0 .06-.01.13-.04.19-.08.19-.26.31-.46.31h-4c-.2 0-.38-.12-.46-.31-.08-.19-.04-.4.11-.54L4.79.5A.996.996 0 016.2.5l1.65 1.65c.1.09.15.22.15.35z",
  }),
);

export default class ShareFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
