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
    d: "M8 15a7.002 7.002 0 01-6.929-5.999h13.858A7.002 7.002 0 018 15zM8 1a7.002 7.002 0 016.93 6H1.07A7.002 7.002 0 018 1z",
  }),
);

export default class CircleLineFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
