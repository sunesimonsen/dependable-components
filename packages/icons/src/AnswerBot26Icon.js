import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", { fill: "currentColor", d: "M0 0h26v26H0z" }),
  h("rect", { width: "3", height: "3", x: "4", y: "11", rx: "3", ry: "3" }),
  h("rect", { width: "3", height: "3", x: "19", y: "11", rx: "3", ry: "3" }),
);

export default class AnswerBot26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
