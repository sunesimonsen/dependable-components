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
    "stroke-linejoin": "round",
    d: "M6 11.5c.5 0 4.5-2.5 4.5-7.5V2.5L6 .5l-4.5 2V4c0 5 4 7.5 4.5 7.5z",
  }),
);

export default class ShieldStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
