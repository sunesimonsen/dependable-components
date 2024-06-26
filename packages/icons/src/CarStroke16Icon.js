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
    d: "M1.5 5.5h13a1 1 0 011 1v5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-5a1 1 0 011-1zm2-5h9l2 5h-13l2-5zm-2 12h2v2a1 1 0 01-2 0v-2zm11 0h2v2a1 1 0 01-2 0v-2zM4 8.5a.5.5 0 100 1 .5.5 0 000-1zm8 0a.5.5 0 100 1 .5.5 0 000-1z",
  }),
);

export default class CarStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
