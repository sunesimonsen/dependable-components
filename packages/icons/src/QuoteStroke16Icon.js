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
    d: "M7 7.5H4c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zm6 0h-3c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM12 12c1-1 1.5-2.5 1.5-4V6M6 12c1-1 1.5-2.5 1.5-4V6",
  }),
);

export default class QuoteStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
