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
    d: "M8 4v2h0a2 2 0 01-2 2h0a2 2 0 01-2-2h0a2 2 0 012-2h0a2 2 0 012 2h0v.5A1.5 1.5 0 009.5 8h0A1.5 1.5 0 0011 6.5V6h0a5 5 0 00-5-5h0a5 5 0 00-5 5h0a5 5 0 005 5h2",
  }),
);

export default class AtFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
