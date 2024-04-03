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
    d: "M10.5 4h-2C7.67 4 7 3.33 7 2.5v-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V2h.5c.28 0 .5.22.5.5s-.22.5-.5.5H5v1h.5c.28 0 .5.22.5.5s-.22.5-.5.5H5v1h.5c.28 0 .5.22.5.5s-.22.5-.5.5H5v1.5c0 .28-.22.5-.5.5S4 8.78 4 8.5V8h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H4V6h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H4V4h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H4V.5c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4.5c0-.28-.22-.5-.5-.5zM8 .5V2c0 .55.45 1 1 1h1.5c.45 0 .67-.54.35-.85l-2-2C8.54-.17 8 .06 8 .5z",
  }),
);

export default class FileZipFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
