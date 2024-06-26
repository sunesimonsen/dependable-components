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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M7.5 1.5h3M9 1.5l-3 14m-1.5 0h3",
  }),
);

export default class ItalicStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
