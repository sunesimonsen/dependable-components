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
    "stroke-linejoin": "round",
    d: "M4 1.5H2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h8c.28 0 .5-.22.5-.5V2c0-.28-.22-.5-.5-.5H8m-4.5 6L5 9l3.5-3.5m-.05-2A2.5 2.5 0 103.5 3c0 .17.02.34.05.5h4.9z",
  }),
);

export default class ClipboardCheckStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
