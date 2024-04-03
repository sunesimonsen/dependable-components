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
    "stroke-width": "2",
    d: "M6 3h8M6 8h8m-8 5h8",
  }),
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "2.5", cy: "3", r: "1.5" }),
    h("circle", { cx: "2.5", cy: "8", r: "1.5" }),
    h("circle", { cx: "2.5", cy: "13", r: "1.5" }),
  ),
);

export default class ListBulletFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
