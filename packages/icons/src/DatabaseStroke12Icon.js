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
    h("ellipse", { cx: "6", cy: "2", rx: "4.5", ry: "1.5" }),
    h("path", {
      d: "M1.5 2v8c0 .8 2 1.5 4.5 1.5s4.5-.7 4.5-1.5V2m0 5.3c0 .8-2 1.5-4.5 1.5s-4.5-.6-4.5-1.5m9-2.6c0 .8-2 1.5-4.5 1.5s-4.5-.7-4.5-1.5",
    }),
  ),
);

export default class DatabaseStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
