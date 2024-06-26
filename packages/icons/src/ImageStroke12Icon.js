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
      y: "1.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      d: "M.5 10.5l3.65-3.65a.5.5 0 01.71 0l1.79 1.8a.5.5 0 00.71 0l.79-.79a.5.5 0 01.71 0L11 10",
    }),
  ),
  h("circle", { cx: "8", cy: "4", r: "1", fill: "currentColor" }),
);

export default class ImageStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
