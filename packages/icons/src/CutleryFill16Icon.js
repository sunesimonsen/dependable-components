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
    d: "M4 4V.5a.5.5 0 011 0V4h1V.5a.5.5 0 011 0v7a2.5 2.5 0 01-2 2.45v5.55a.5.5 0 11-1 0V9.95A2.5 2.5 0 012 7.5v-7a.5.5 0 011 0V4h1zm6 7a1 1 0 01-1-1V4a4 4 0 014-4 1 1 0 011 1v14c0 1.333-2 1.333-2 0v-4h-2z",
  }),
);

export default class CutleryFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
