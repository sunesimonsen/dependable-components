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
    d: "M4 11L8 1l4 10M5.5 8h5",
  }),
  h("path", { fill: "currentColor", d: "M2 13h12v3H2z" }),
);

export default class TextColorFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
