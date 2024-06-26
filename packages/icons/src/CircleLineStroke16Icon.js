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
    d: "M8 14a6.002 6.002 0 005.658-4l1.052.001a7.003 7.003 0 01-13.42 0h1.052A6.003 6.003 0 008 14zm7-7a1 1 0 010 2H1a1 1 0 110-2h14zM8 1a7.003 7.003 0 016.71 5h-1.05A6.002 6.002 0 002.34 6H1.29C2.15 3.108 4.829 1 8 1z",
  }),
);

export default class CircleLineStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
