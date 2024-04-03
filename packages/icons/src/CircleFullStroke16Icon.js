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
  }),
);

export default class CircleFullStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
