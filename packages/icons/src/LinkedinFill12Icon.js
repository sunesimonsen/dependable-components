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
    fill: "currentColor",
    d: "M10.8 0A1.2 1.2 0 0112 1.2v9.6a1.2 1.2 0 01-1.2 1.2H1.2A1.2 1.2 0 010 10.8V1.2A1.2 1.2 0 011.2 0h9.6zM8.09 4.356a1.87 1.87 0 00-1.598.792l-.085.133h-.024v-.783H4.676v5.727h1.778V7.392c0-.747.142-1.47 1.068-1.47.913 0 .925.854.925 1.518v2.785h1.778V7.084l-.005-.325c-.05-1.38-.456-2.403-2.13-2.403zm-4.531.142h-1.78v5.727h1.78V4.498zm-.89-2.846a1.032 1.032 0 100 2.064 1.032 1.032 0 000-2.064z",
  }),
);

export default class LinkedinFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
