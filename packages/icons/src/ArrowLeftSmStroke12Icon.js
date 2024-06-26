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
    fill: "currentColor",
    d: "M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z",
  }),
);

export default class ArrowLeftSmStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
