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
    d: "M5 10.5a.5.5 0 01-.788.41l-.066-.056-4-4a.5.5 0 01-.057-.638l.057-.07 4-4a.5.5 0 01.847.268L5 2.5V6h3.5a7.5 7.5 0 017.5 7.5.5.5 0 11-1 0 6.5 6.5 0 00-6.267-6.496L8.5 7H5v3.5z",
  }),
);

export default class ArrowLeftUpFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
