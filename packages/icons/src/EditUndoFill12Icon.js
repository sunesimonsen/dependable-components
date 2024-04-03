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
    d: "M11.5 8.25c0-3.18-2.57-5.75-5.75-5.75C3 2.5 2.05 3.85 1 5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M1 6h2.5c.2 0 .38-.12.46-.31s.04-.4-.11-.54l-3-3a.478.478 0 00-.54-.11C.12 2.12 0 2.3 0 2.5V5c0 .55.45 1 1 1z",
  }),
);

export default class EditUndoFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
