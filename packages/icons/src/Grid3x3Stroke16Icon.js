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
    "stroke-linejoin": "round",
    d: "M.5.5h15v15H.5zm5 0v15m5-15v15m-10-10h15m-15 5h15",
  }),
);

export default class Grid3x3Stroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
