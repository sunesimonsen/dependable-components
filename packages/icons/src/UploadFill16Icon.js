import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    focusable: "false",
    viewBox: "0 0 16 16",
  },
  h("path", {
    fill: "currentColor",
    d: "M11 5c-.09 0-.17 0-.26.01A4.489 4.489 0 006.5 2C4.02 2 2 4.02 2 6.5c0 .32.04.64.12.98C.82 8.17 0 9.5 0 11c0 2.21 1.79 4 4 4h4V9.88l-1.56 1.56c-.24.24-.64.24-.88 0s-.24-.64 0-.88L7.7 8.41c.44-.44 1.15-.44 1.59 0l2.15 2.15c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L9 9.88V15h2c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  }),
);

export default class UploadFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
