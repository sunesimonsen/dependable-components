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
    { fill: "currentColor" },
    h("path", {
      d: "M5 12h5c1.2 0 1.77-2 2-6.75A1.24 1.24 0 0010.77 4H8V1.5A1.46 1.46 0 006.5 0 1.46 1.46 0 005 1.5c0 2.08-.73 2.56-.74 2.56A.54.54 0 004 4.5V11a1 1 0 001 1z",
    }),
    h("rect", { width: "3", height: "8", y: "4", rx: "1", ry: "1" }),
  ),
);

export default class ThumbsUpFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
