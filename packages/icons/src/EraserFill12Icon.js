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
  h("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M6.5 11.5h5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M3.45 4.34L.5 7.29a.996.996 0 000 1.41l2.79 2.79c.19.2.45.29.71.29s.51-.1.71-.29l2.95-2.95-4.21-4.2zm8.05-1.05L8.71.5A.996.996 0 007.3.5L4.34 3.45l4.21 4.21 2.95-2.95c.39-.39.39-1.03 0-1.42z",
  }),
);

export default class EraserFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
