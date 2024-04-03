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
    h("path", { d: "M3.5 5.5V3a2.5 2.5 0 015 0v2.5" }),
    h("rect", {
      width: "9",
      height: "6",
      x: "1.5",
      y: "5.5",
      rx: ".5",
      ry: ".5",
    }),
  ),
);

export default class LockLockedStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
