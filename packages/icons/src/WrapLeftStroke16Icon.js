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
    d: "M1.5 14a.5.5 0 110-1h13a.5.5 0 110 1h-13zm9-4a.5.5 0 110-1h4a.5.5 0 110 1h-4zm0-4a.5.5 0 110-1h4a.5.5 0 110 1h-4zM7 4H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V5a1 1 0 00-1-1zm0 1v5H2V5h5zM1.5 2a.5.5 0 010-1h13a.5.5 0 110 1h-13z",
  }),
);

export default class WrapLeftStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
