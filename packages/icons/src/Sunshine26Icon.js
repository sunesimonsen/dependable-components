import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M.996 24A12.96 12.96 0 010 19C0 11.82 5.82 6 13 6s13 5.82 13 13c0 1.772-.354 3.46-.996 5H.996z",
  }),
);

export default class Sunshine26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
