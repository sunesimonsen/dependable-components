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
  h("circle", { cx: "6", cy: "6", r: "5", fill: "currentColor" }),
);

export default class CircleFullFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
