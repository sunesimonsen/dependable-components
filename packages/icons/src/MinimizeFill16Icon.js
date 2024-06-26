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
    fill: "currentColor",
    d: "M11 .71V4c0 .55.45 1 1 1h3.29c.45 0 .67-.54.35-.85L11.85.36a.495.495 0 00-.85.35zM5 15.29V12c0-.55-.45-1-1-1H.71c-.45 0-.67.54-.35.85l3.79 3.79c.31.32.85.1.85-.35zM5 .71V4c0 .55-.45 1-1 1H.71a.5.5 0 01-.36-.85L4.14.36c.32-.32.86-.1.86.35zm6 14.58V12c0-.55.45-1 1-1h3.29c.45 0 .67.54.35.85l-3.79 3.79c-.31.32-.85.1-.85-.35z",
  }),
);

export default class MinimizeFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
