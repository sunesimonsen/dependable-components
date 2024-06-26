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
    d: "M3.5 2.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H8.5m-3 4h3m-3 2h3m-.052-5c.31-1.525-.894-3-2.45-3-1.555 0-2.759 1.475-2.45 3h4.9z",
  }),
  h("path", { fill: "currentColor", d: "M3 6h1v1H3zm0 2h1v1H3z" }),
);

export default class ClipboardListStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
