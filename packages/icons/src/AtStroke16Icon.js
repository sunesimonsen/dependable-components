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
    d: "M11.5 4.5V8h0A3.5 3.5 0 018 11.5h0A3.5 3.5 0 014.5 8h0A3.5 3.5 0 018 4.5h0A3.5 3.5 0 0111.5 8h0v1.5a2 2 0 002 2h0a2 2 0 002-2V8h0A7.5 7.5 0 008 .5h0A7.5 7.5 0 00.5 8h0A7.5 7.5 0 008 15.5h3.41",
  }),
);

export default class AtStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
