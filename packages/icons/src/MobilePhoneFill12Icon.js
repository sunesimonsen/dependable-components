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
    width: "7",
    height: "11",
    x: "2.5",
    y: ".5",
    fill: "none",
    stroke: "currentColor",
    rx: ".5",
    ry: ".5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M2.5.5h7V2h-7zm0 8.5v2.5h7V9zM7 11H5a.5.5 0 010-1h2a.5.5 0 010 1zM4 3h4v5H4z",
  }),
);

export default class MobilePhoneFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
