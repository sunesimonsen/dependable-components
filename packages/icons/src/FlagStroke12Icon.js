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
    d: "M1.5 11.5V.5m0 6h8.3c.4 0 .7-.5.4-.9L8.5 4l1.6-1.6c.3-.3.1-.9-.4-.9H1.5v5z",
  }),
);

export default class FlagStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
