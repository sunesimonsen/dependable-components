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
    d: "M2 11a1 1 0 010-2h8a1 1 0 010 2H2zm6-3a1 1 0 110-2h2a1 1 0 010 2H8zm0-3a1 1 0 110-2h2a1 1 0 010 2H8zM5 3H2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a1 1 0 110-2h8a1 1 0 010 2H2z",
  }),
);

export default class WrapLeftFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
