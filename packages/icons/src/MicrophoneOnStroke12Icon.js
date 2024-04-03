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
    { fill: "none", stroke: "currentColor" },
    h("rect", {
      width: "3",
      height: "7",
      x: "4.5",
      y: ".5",
      rx: "1.5",
      ry: "1.5",
    }),
    h("path", {
      "stroke-linecap": "round",
      d: "M9.5 5.5V6A3.5 3.5 0 016 9.5 3.5 3.5 0 012.5 6v-.5",
    }),
  ),
  h("path", { fill: "currentColor", d: "M5 9.5h2V12H5z" }),
);

export default class MicrophoneOnStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
