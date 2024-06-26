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
    d: "M.5 8.25C.5 5.07 3.07 2.5 6.25 2.5 9 2.5 9.95 3.85 11 5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M11 6H8.5c-.2 0-.38-.12-.46-.31s-.04-.4.11-.54l3-3a.499.499 0 01.85.35V5c0 .55-.45 1-1 1z",
  }),
);

export default class EditRedoFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
