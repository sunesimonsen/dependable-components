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
    h("path", {
      "stroke-linejoin": "round",
      d: "M14.5 6.5a1 1 0 011 1c-.1 2.4-.4 8-2 8H5a.47.47 0 01-.5-.5V6.9a.55.55 0 01.3-.5c.6-.2 1.7-1 1.7-4.4a1.5 1.5 0 013 0v4.5z",
    }),
    h("rect", {
      width: "2",
      height: "9",
      x: ".5",
      y: "6.5",
      rx: ".5",
      ry: ".5",
    }),
  ),
);

export default class ThumbsUpStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
