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
    h("ellipse", { cx: "8", cy: "3", rx: "5.5", ry: "2" }),
    h("path", {
      d: "M2.5 3v10.5c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V3m0 7c0 1.1-2.5 2-5.5 2s-5.5-.9-5.5-2m11-3.5c0 1.1-2.5 2-5.5 2s-5.5-.9-5.5-2",
    }),
  ),
);

export default class DatabaseStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
