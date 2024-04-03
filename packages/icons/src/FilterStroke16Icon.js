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
    d: "M1.35 2.35L6.5 7.5v7.07c0 .4.45.64.78.42l2-1.33c.14-.09.22-.25.22-.42V7.5l5.15-5.15a.5.5 0 00-.35-.85H1.71a.5.5 0 00-.36.85z",
  }),
);

export default class FilterStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
