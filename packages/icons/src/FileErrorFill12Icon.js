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
    d: "M10.5 4h-2C7.67 4 7 3.33 7 2.5v-2c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4.5c0-.28-.22-.5-.5-.5zM8.44 9.06c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L6 8.38 4.44 9.94c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88L5.12 7.5 3.56 5.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.62l1.56-1.56c.24-.24.64-.24.88 0s.24.64 0 .88L6.88 7.5l1.56 1.56zM8 .5V2c0 .55.45 1 1 1h1.5c.45 0 .67-.54.35-.85l-2-2C8.54-.17 8 .06 8 .5z",
  }),
);

export default class FileErrorFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
