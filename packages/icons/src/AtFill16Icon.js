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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M11 5v3h0a3 3 0 01-3 3h0a3 3 0 01-3-3h0a3 3 0 013-3h0a3 3 0 013 3h0v1a2 2 0 002 2h0a2 2 0 002-2V8h0a7 7 0 00-7-7h0a7 7 0 00-7 7h0a7 7 0 007 7h2.8",
  }),
);

export default class AtFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
