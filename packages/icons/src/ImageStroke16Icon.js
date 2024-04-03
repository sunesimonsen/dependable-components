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
      y: "1.5",
      rx: ".5",
      ry: ".5",
    }),
    h("path", {
      d: "M.5 14l5.15-5.15a.5.5 0 01.71 0l3.29 3.29a.5.5 0 00.71 0l1.29-1.29a.5.5 0 01.71 0L15.5 14",
    }),
  ),
  h("circle", { cx: "11.5", cy: "5.5", r: "1.5", fill: "currentColor" }),
);

export default class ImageStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
