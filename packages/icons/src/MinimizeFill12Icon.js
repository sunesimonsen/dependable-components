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
    d: "M3 4H.5c-.2 0-.38-.12-.46-.31-.08-.19-.04-.4.11-.54l3-3c.14-.15.35-.19.54-.11.19.08.31.26.31.46V3c0 .55-.45 1-1 1zm6 0h2.5a.499.499 0 00.35-.85l-3-3a.474.474 0 00-.54-.11C8.12.12 8 .3 8 .5V3c0 .55.45 1 1 1zm0 4h2.5a.499.499 0 01.35.85l-3 3c-.14.15-.35.19-.54.11A.499.499 0 018 11.5V9c0-.55.45-1 1-1zM3 8H.5c-.2 0-.38.12-.46.31-.08.19-.04.4.11.54l3 3c.14.15.35.19.54.11.19-.08.31-.26.31-.46V9c0-.55-.45-1-1-1z",
  }),
);

export default class MinimizeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
