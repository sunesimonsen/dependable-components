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
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M1.5 4H11M1 8h9.5M9 1L7 11M5 1L3 11",
  }),
);

export default class NumberFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
