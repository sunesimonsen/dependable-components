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
  h("path", {
    fill: "currentColor",
    d: "M11.22 10.513l4.637 4.637a.5.5 0 01-.707.707l-4.637-4.637-2.115 4.23a1 1 0 01-1.801-.025l-6.5-14C-.296.579.579-.295 1.425.097l14 6.5a1 1 0 01.026 1.801l-4.23 2.115z",
  }),
);

export default class CursorArrowFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
