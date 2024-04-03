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
    d: "M2.5 8.5l3-7 3 7m-5-2h4",
  }),
  h("path", { fill: "currentColor", d: "M2 10h7v2H2z" }),
);

export default class TextColorStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
