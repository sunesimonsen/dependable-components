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
  h(
    "g",
    { fill: "none", stroke: "currentColor" },
    h("rect", {
      width: "11",
      height: "9",
      x: ".5",
      y: "2.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-width": "2",
      d: "M3 4V1m6 3V1",
    }),
  ),
);

export default class CalendarStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
