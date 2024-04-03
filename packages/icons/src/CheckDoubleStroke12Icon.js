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
    "stroke-linejoin": "round",
    d: "M1 6l2.5 2.5 5-5m-2 5l5-5",
  }),
);

export default class CheckDoubleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
