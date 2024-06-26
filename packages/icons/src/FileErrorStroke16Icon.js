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
    d: "M14.5 4.205V15a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h8.853a.5.5 0 01.356.15l3.148 3.204a.5.5 0 01.143.35zM10.5.5V4a.5.5 0 00.5.5h3.5m-9 8l5-5m0 5l-5-5",
  }),
);

export default class FileErrorStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
