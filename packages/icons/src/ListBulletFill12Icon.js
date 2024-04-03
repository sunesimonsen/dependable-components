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
    "stroke-width": "2",
    d: "M5 2h5M5 6h5m-5 4h5",
  }),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "2", cy: "2", r: "1" }),
    h("circle", { cx: "2", cy: "6", r: "1" }),
    h("circle", { cx: "2", cy: "10", r: "1" }),
  ),
);

export default class ListBulletFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
