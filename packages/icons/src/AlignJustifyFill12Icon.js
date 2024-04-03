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
    d: "M2 11a1 1 0 010-2h8a1 1 0 010 2H2zm0-3a1 1 0 110-2h8a1 1 0 010 2H2zm0-3a1 1 0 110-2h8a1 1 0 010 2H2zm0-3a1 1 0 110-2h8a1 1 0 010 2H2z",
  }),
);

export default class AlignJustifyFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
