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
    { fill: "none", stroke: "currentColor" },
    h("circle", { cx: "6", cy: "6", r: "5.5" }),
    h("circle", { cx: "6", cy: "4", r: "1.5" }),
    h("path", {
      "stroke-linecap": "round",
      d: "M8.5 9C8.1 8.1 7 7.5 6 7.5S3.9 8.1 3.5 9",
    }),
  ),
);

export default class UserCircleStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
