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
    d: "M1.5 11a.5.5 0 110-1h9a.5.5 0 110 1h-9zm7-3a.5.5 0 010-1h2a.5.5 0 110 1h-2zm0-3a.5.5 0 010-1h2a.5.5 0 110 1h-2zM6 3H2a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1zm0 1v4H2V4h4zM1.5 2a.5.5 0 010-1h9a.5.5 0 110 1h-9z",
  }),
);

export default class WrapLeftStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
