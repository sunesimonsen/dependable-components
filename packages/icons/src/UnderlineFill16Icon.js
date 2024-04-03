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
    d: "M3 15h10M4 1v7c0 2.2 1.8 4 4 4s4-1.8 4-4V1",
  }),
);

export default class UnderlineFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
