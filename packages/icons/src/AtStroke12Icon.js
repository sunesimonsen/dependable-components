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
    "stroke-linecap": "round",
    d: "M8.5 3.5V6h0A2.5 2.5 0 016 8.5h0A2.5 2.5 0 013.5 6h0A2.5 2.5 0 016 3.5h0A2.5 2.5 0 018.5 6h0v1A1.5 1.5 0 0010 8.5h0A1.5 1.5 0 0011.5 7V6h0A5.5 5.5 0 006 .5h0A5.5 5.5 0 00.5 6h0A5.5 5.5 0 006 11.5h2.5",
  }),
);

export default class AtStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
