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
    d: "M1 3h1V.5a.5.5 0 011 0V3h1V.5a.5.5 0 011 0v5a2.5 2.5 0 01-2 2.45v3.55a.5.5 0 11-1 0V7.95A2.5 2.5 0 010 5.5v-5a.5.5 0 111 0V3zm6.5 5a.5.5 0 01-.5-.5v-4A3.5 3.5 0 0110.5 0a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V8H7.5z",
  }),
);

export default class CutleryFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
