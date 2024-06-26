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
    h("path", {
      "stroke-linejoin": "round",
      d: "M7.74 6.38L5.5 6.5l.12-2.24L9.38.5l2.12 2.12-3.76 3.76z",
    }),
    h("path", {
      "stroke-linecap": "round",
      d: "M5.59 1.5H1.91a.41.41 0 00-.41.41v8.18a.41.41 0 00.41.41h8.18a.41.41 0 00.41-.41V6.41",
    }),
  ),
);

export default class NotesStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
