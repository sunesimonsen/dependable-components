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
    d: "M3.5 11.5l4-10 4 10M5 8.5h5",
  }),
  h("path", { fill: "currentColor", d: "M2 13h11v3H2z" }),
);

export default class TextColorStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
