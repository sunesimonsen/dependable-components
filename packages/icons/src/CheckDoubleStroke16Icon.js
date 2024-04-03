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
    d: "M1.5 9L4 11.5 10.5 5M8 11.5L14.5 5",
  }),
);

export default class CheckDoubleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
