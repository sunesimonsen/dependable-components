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
    d: "M7 0h1.96v2H7zm0 11h2v5H7zm5.5-1H2a1 1 0 01-1-1V4a1 1 0 011-1h10.5a.5.5 0 01.35.15l2.65 2.64a1 1 0 010 1.41l-2.65 2.65a.5.5 0 01-.35.15z",
  }),
);

export default class SignpostFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
