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
    d: "M10.56 2.69L6.4.46a.87.87 0 00-.8 0L1.44 2.69c-.27.15-.44.44-.44.75v5.12c0 .31.17.6.45.75l4.15 2.24c.13.07.27.1.4.1.14 0 .28-.03.4-.1l4.16-2.24c.27-.15.44-.44.44-.75V3.44c0-.31-.17-.6-.44-.75zm-.57 1.52L6.5 6.09v4.41c0 .28-.22.5-.5.5s-.5-.22-.5-.5V6.09L1.99 4.2a.623.623 0 01.59-1.1L6 4.94l3.4-1.83c.3-.17.68-.05.85.25.16.31.05.69-.26.85z",
  }),
);

export default class Box3dFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
