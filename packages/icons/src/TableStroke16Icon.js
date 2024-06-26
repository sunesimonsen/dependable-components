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
    d: "M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zM5 12H1v3h4v-3zm5 0H6v3h4v-3zm5 0h-4v3h4v-3zM5 8H1v3h4V8zm5 0H6v3h4V8zm5 0h-4v3h4V8zM5 4H1v3h4V4zm5 0H6v3h4V4zm5 0h-4v3h4V4zm0-3H1v2h14V1z",
  }),
);

export default class TableStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
