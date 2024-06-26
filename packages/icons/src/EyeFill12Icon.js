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
    h("circle", { cx: "6", cy: "6", r: "1.5" }),
    h("path", {
      d: "M11.79 5.34C11.08 4.33 9.1 2 6 2S.92 4.33.21 5.34c-.28.4-.28.93 0 1.32C.92 7.67 2.9 10 6 10s5.08-2.33 5.79-3.34c.28-.39.28-.93 0-1.32zM6 8.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
    }),
  ),
);

export default class EyeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
