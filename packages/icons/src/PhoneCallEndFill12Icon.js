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
    d: "M4 6h4v1a1 1 0 001 1h2a1 1 0 001-1V6a3 3 0 00-3-3H3a3 3 0 00-3 3v1a1 1 0 001 1h2a1 1 0 001-1V6z",
  }),
);

export default class PhoneCallEndFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
