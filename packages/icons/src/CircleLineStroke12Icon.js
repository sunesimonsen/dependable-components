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
  h("path", {
    fill: "currentColor",
    d: "M10.584 8a5.001 5.001 0 01-9.168 0l1.12.001A3.998 3.998 0 006 10c1.48 0 2.772-.804 3.464-1.999h1.12zM11 5a1 1 0 010 2H1a1 1 0 110-2h10zM6 1a5.001 5.001 0 014.584 3h-1.12A3.998 3.998 0 006 2c-1.48 0-2.773.804-3.465 2h-1.12A5.001 5.001 0 016 1z",
  }),
);

export default class CircleLineStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
