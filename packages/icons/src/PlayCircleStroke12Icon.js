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
  h("circle", {
    cx: "6",
    cy: "6",
    r: "5.5",
    fill: "none",
    stroke: "currentColor",
  }),
  h("path", {
    fill: "currentColor",
    d: "M8.467 5.6L4.8 2.85a.5.5 0 00-.8.4v5.5a.5.5 0 00.8.4L8.467 6.4a.5.5 0 000-.8z",
  }),
);

export default class PlayCircleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
