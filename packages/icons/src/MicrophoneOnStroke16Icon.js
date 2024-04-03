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
  h(
    "g",
    { fill: "none", stroke: "currentColor" },
    h("rect", {
      width: "5",
      height: "11",
      x: "5.5",
      y: ".5",
      rx: "2.5",
      ry: "2.5",
    }),
    h("path", {
      "stroke-linecap": "round",
      d: "M3.5 6.5V9a4.5 4.5 0 009 0V6.5",
    }),
  ),
  h("path", { fill: "currentColor", d: "M7 13h2v3H7z" }),
);

export default class MicrophoneOnStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
