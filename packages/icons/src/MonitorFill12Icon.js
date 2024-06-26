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
  h(
    "g",
    { fill: "currentColor" },
    h("rect", { width: "12", height: "8", rx: "1", ry: "1" }),
    h("path", {
      d: "M6 9a3 3 0 00-2.9 2.4.5.5 0 00.5.6h4.8a.5.5 0 00.5-.6A3 3 0 006 9z",
    }),
  ),
);

export default class MonitorFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
