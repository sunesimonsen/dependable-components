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
    d: "M11 0a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h10zM5.5 10a.5.5 0 010-1h4a.5.5 0 010 1h-4zM2.146 4.854a.5.5 0 11.708-.708l2.148 2.149a1 1 0 010 1.42l-2.15 2.14a.5.5 0 11-.705-.71l2.15-2.14-2.15-2.151zM11 3H1v8h10V3zm0-2H1v1h10V1z",
  }),
);

export default class TerminalWindowStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
