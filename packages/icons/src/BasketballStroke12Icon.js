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
    d: "M6 11.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM2 10l8-8m0 8L2 2M5.5.522V1A4.5 4.5 0 011 5.5H.522M6.5 11.478V11A4.5 4.5 0 0111 6.5h.478",
  }),
);

export default class BasketballStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
