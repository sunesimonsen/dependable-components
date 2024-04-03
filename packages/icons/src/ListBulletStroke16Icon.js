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
    d: "M5.5 2.5h9m-9 5h9m-9 5h9",
  }),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "2.5", cy: "2.5", r: "1.5" }),
    h("circle", { cx: "2.5", cy: "7.5", r: "1.5" }),
    h("circle", { cx: "2.5", cy: "12.5", r: "1.5" }),
  ),
);

export default class ListBulletStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
