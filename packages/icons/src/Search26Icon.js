import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h(
    "g",
    {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-width": "2",
    },
    h("circle", { cx: "11", cy: "11", r: "7" }),
    h("path", { d: "M16 16l6 6" }),
  ),
);

export default class Search26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
