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
    d: "M6 11a5.002 5.002 0 01-4.9-3.999h9.8A5.002 5.002 0 016 11zM6 1a5.002 5.002 0 014.9 4H1.1A5.002 5.002 0 016 1z",
  }),
);

export default class CircleLineFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
