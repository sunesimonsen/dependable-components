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
    fill: "none",
    stroke: "currentColor",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5",
  }),
);

export default class FileGenericStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
