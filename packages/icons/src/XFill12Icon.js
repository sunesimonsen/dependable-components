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
    d: "M3.5 8.5l5-5m0 5l-5-5",
  }),
);

export default class XFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
