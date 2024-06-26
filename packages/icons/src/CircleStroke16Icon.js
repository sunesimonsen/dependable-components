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
    d: "M1.74 3.86c.56-.84 1.28-1.56 2.12-2.12M.65 9.51C.55 9.02.5 8.52.5 8c0-.51.05-1.01.15-1.5m3.21 7.75a7.474 7.474 0 01-2.11-2.12m7.76 3.22c-.49.1-.99.15-1.51.15-.51 0-1.02-.05-1.5-.15m7.76-3.21c-.56.84-1.28 1.56-2.12 2.12m3.21-7.76c.1.48.15.99.15 1.5s-.05 1.02-.15 1.5m-3.22-7.76c.84.56 1.57 1.28 2.13 2.12M6.5.65C6.98.55 7.49.5 8 .5s1.02.05 1.5.15",
  }),
);

export default class CircleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
