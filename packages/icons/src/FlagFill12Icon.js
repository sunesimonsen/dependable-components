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
    d: "M1.5 11.5V.5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M10.79 7H3V1h7.79c.45 0 .67.54.35.85L9 4l2.15 2.15a.5.5 0 01-.36.85z",
  }),
);

export default class FlagFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
