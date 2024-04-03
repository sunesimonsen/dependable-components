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
    d: "M11.5 0H9v10.5c0 .28.22.5.5.5s.5-.22.5-.5V1h1v9.5c0 .28.22.5.5.5s.5-.22.5-.5V.5c0-.28-.22-.5-.5-.5zM5 4c0 2.21 1.79 4 4 4V0C6.79 0 5 1.79 5 4zM4 15.5v-6c0-.45-.54-.67-.85-.35L.5 11.79a.996.996 0 000 1.41l2.65 2.65c.31.32.85.1.85-.35z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M1.5 12.5h14",
  }),
);

export default class DirectionRtlFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
