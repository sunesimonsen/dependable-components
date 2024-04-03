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
  h("rect", {
    width: "11",
    height: "9",
    x: ".5",
    y: "1.5",
    fill: "none",
    stroke: "currentColor",
    rx: ".5",
    ry: ".5",
  }),
  h("path", { fill: "currentColor", d: "M.5 3h11v2H.5z" }),
);

export default class CreditCardStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
