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
  h(
    "g",
    { fill: "currentColor" },
    h("path", { d: "M5 9.5h2V12H5z" }),
    h("rect", { width: "4", height: "8", x: "4", rx: "2", ry: "2" }),
  ),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M9.5 5.5V6A3.5 3.5 0 016 9.5 3.5 3.5 0 012.5 6v-.5",
  }),
);

export default class MicrophoneOnFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
