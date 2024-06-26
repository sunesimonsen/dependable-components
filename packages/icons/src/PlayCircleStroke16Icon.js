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
  h("circle", {
    cx: "8",
    cy: "8",
    r: "7.5",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.034",
  }),
  h("path", {
    fill: "currentColor",
    d: "M10.79 7.29L6.85 3.35a.5.5 0 00-.85.36v8.59c0 .45.54.67.85.35l3.94-3.94c.39-.39.39-1.03 0-1.42z",
  }),
);

export default class PlayCircleStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
