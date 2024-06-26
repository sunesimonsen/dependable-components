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
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M8.5 15.5h7",
  }),
  h("path", {
    fill: "currentColor",
    d: "M4.79 5.5L.5 9.79a.996.996 0 000 1.41l4.29 4.29c.19.2.45.29.71.29s.51-.1.71-.29l4.29-4.29-5.71-5.7zm10.71-.71L11.21.5A.996.996 0 009.8.5L5.5 4.79l5.71 5.71 4.29-4.29c.39-.39.39-1.03 0-1.42z",
  }),
);

export default class EraserFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
