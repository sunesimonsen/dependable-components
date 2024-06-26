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
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M8.5 7.5l3-3m-3 0l3 3",
  }),
  h("path", {
    fill: "currentColor",
    d: "M6 10.77c-.26 0-.52-.11-.72-.3L2.79 8H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1.79l2.49-2.47a1 1 0 011.1-.22c.37.15.62.51.62.92v7.53a1.016 1.016 0 01-1 1.01z",
  }),
);

export default class VolumeMutedFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
