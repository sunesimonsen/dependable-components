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
      height: "13",
      x: ".5",
      y: "2.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-width": "2",
      d: "M4.01 1.05v3m7.99-3v3",
    }),
  ),
);

export default class CalendarStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
