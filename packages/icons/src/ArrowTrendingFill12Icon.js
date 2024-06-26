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
    d: "M11.501 2a.5.5 0 01.492.41L12 2.5v3a.5.5 0 01-.788.41l-.066-.056-.793-.794-3.147 3.147a1 1 0 01-1.32.083l-.094-.083L4.5 6.915 1.707 9.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3.5-3.5a1 1 0 011.32-.083l.094.083L6.5 6.085l2.439-2.44-.792-.791a.5.5 0 01.268-.847L8.501 2h3z",
  }),
);

export default class ArrowTrendingFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
