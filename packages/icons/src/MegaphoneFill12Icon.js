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
    d: "M6 9v1.5a1.5 1.5 0 01-3 0V9a3 3 0 110-6h4.586L10.293.293C10.923-.337 12 .109 12 1v10c0 .89-1.077 1.337-1.707.707L7.586 9H6z",
  }),
);

export default class MegaphoneFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
