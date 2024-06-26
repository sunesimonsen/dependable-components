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
    d: "M4 7.5a.5.5 0 01-.788.41l-.066-.056-3-3a.5.5 0 01-.057-.638l.057-.07 3-3a.5.5 0 01.847.268L4 1.5V4h1.5a6.5 6.5 0 016.5 6.5.5.5 0 11-1 0 5.5 5.5 0 00-5.279-5.496L5.5 5H4v2.5z",
  }),
);

export default class ArrowLeftUpFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
