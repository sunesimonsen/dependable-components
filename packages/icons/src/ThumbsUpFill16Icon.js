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
    { fill: "currentColor" },
    h("path", {
      d: "M5 16h8.5c1.5 0 2.25-2.54 2.5-8.48A1.51 1.51 0 0014.5 6H10V2a1.94 1.94 0 00-2-2 1.94 1.94 0 00-2 2c0 3.14-.95 3.79-1.36 3.93A1.07 1.07 0 004 6.9V15a1 1 0 001 1z",
    }),
    h("rect", { width: "3", height: "10", y: "6", rx: "1", ry: "1" }),
  ),
);

export default class ThumbsUpFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
