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
    d: "M8 0a8 8 0 108 8 8 8 0 00-8-8zm2 5a1 1 0 11-1 1 1 1 0 011-1zM6 5a1 1 0 11-1 1 1 1 0 011-1zm4.74 6.08a7.22 7.22 0 01-5.48 0 .63.63 0 01.48-1.16 5.9 5.9 0 004.52 0 .63.63 0 11.48 1.16z",
  }),
);

export default class SmileSlightFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
