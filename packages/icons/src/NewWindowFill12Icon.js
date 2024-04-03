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
    d: "M10.5 8.5V10c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V2c0-.28.22-.5.5-.5h1.5M6 6l4-4",
  }),
  h("path", {
    fill: "currentColor",
    d: "M10.5 6.5a.47.47 0 01-.35-.15l-4.5-4.5a.474.474 0 01-.11-.54C5.62 1.12 5.8 1 6 1h4c.55 0 1 .45 1 1v4c0 .2-.12.38-.31.46-.06.03-.13.04-.19.04z",
  }),
);

export default class NewWindowFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
