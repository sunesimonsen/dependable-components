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
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 9l2.5 2.5L10 5m-1.5 6.5L15 5",
  }),
);

export default class CheckDoubleFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
