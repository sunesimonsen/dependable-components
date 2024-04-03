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
  h(
    "g",
    { fill: "none", stroke: "currentColor" },
    h("rect", {
      width: "15",
      height: "10",
      x: ".5",
      y: ".5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      "stroke-linecap": "round",
      d: "M11.5 15.5a3.54 3.54 0 00-7 0",
    }),
  ),
);

export default class MonitorStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
