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
    d: "M10.5 6.5H14c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5H1c-.28 0-.5-.22-.5-.5V7c0-.28.22-.5.5-.5h3.5m3 4V1",
  }),
  h("path", {
    fill: "currentColor",
    d: "M10.5 4h-6c-.45 0-.67-.54-.35-.85L6.79.5A.996.996 0 018.2.5l2.65 2.65c.32.31.1.85-.35.85z",
  }),
);

export default class ShareFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
