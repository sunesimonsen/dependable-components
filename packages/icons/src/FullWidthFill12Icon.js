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
    d: "M10 11a1 1 0 000-2H2a1 1 0 100 2h8zm0-8H2a1 1 0 00-1 1v3a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zM2 0a1 1 0 100 2h8a1 1 0 000-2H2z",
  }),
);

export default class FullWidthFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
