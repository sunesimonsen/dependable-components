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
    h("circle", { cx: "8", cy: "8", r: "2.5" }),
    h("path", {
      "stroke-linecap": "round",
      d: "M15.42 8.29c.12-.18.12-.4 0-.58-.7-1-3.28-4.21-7.42-4.21S1.28 6.71.58 7.71c-.12.18-.12.4 0 .58.7 1 3.28 4.21 7.42 4.21s6.72-3.21 7.42-4.21z",
    }),
  ),
);

export default class EyeStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
