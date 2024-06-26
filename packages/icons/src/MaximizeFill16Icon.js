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
    d: "M16 4.29V1c0-.55-.45-1-1-1h-3.29c-.45 0-.67.54-.35.85l3.79 3.79c.31.32.85.1.85-.35zM0 11.71V15c0 .55.45 1 1 1h3.29c.45 0 .67-.54.35-.85L.85 11.36a.495.495 0 00-.85.35zm0-7.42V1c0-.55.45-1 1-1h3.29c.45 0 .67.54.35.85L.85 4.65A.5.5 0 010 4.29zm16 7.42V15c0 .55-.45 1-1 1h-3.29c-.45 0-.67-.54-.35-.85l3.79-3.79c.31-.32.85-.1.85.35z",
  }),
);

export default class MaximizeFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
