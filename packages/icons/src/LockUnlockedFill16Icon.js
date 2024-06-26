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
    d: "M4.5 7V4a3.5 3.5 0 017 0v.5",
  }),
  h("rect", {
    width: "12",
    height: "9",
    x: "2",
    y: "7",
    fill: "currentColor",
    rx: "1",
    ry: "1",
  }),
);

export default class LockUnlockedFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
