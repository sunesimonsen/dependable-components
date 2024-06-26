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
    d: "M1 2h8m-8 8h8M3 6h8",
  }),
);

export default class RearrangeStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
