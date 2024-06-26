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
    d: "M5.9 0c1.96 0 3.6 1.554 3.6 3.5a3.42 3.42 0 01-.86 2.265A3.453 3.453 0 0110 8.5c0 1.946-1.64 3.5-3.6 3.5H3a1 1 0 01-1-1V1a1 1 0 011-1h2.9zM4 10h2.4C7.279 10 8 9.317 8 8.5S7.279 7 6.4 7H4v3zm1.9-8H4v3h1.9c.879 0 1.6-.683 1.6-1.5S6.779 2 5.9 2z",
  }),
);

export default class BoldFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
