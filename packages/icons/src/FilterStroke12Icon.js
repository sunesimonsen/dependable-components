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
    d: "M.78 1.35L4.5 5v5.69c0 .37.39.61.72.45l2-1c.17-.09.28-.26.28-.45V5l3.72-3.65a.5.5 0 00-.35-.85H1.14a.5.5 0 00-.36.85z",
  }),
);

export default class FilterStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
