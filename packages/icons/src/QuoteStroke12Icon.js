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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M5 6.5H3c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zm5 0H8c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zM9.5 10c.5-.5 1-1.5 1-3V5.5m-6 4.5c.5-.5 1-1.5 1-3V5.5",
  }),
);

export default class QuoteStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
