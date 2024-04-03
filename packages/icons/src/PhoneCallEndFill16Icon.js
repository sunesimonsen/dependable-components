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
    d: "M6 8v2a1 1 0 01-1 1H1a1 1 0 01-1-1V8a4 4 0 014-4h8a4 4 0 014 4v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8H6z",
  }),
);

export default class PhoneCallEndFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
