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
    d: "M7.76.63l-6 3.23c-.16.09-.26.25-.26.44v7.4c0 .18.1.35.26.44l6 3.23c.15.08.33.08.47 0l6-3.23c.16-.09.26-.26.26-.44V4.3c0-.18-.1-.35-.26-.44l-6-3.23a.49.49 0 00-.47 0zM1.5 4L8 7.5 14.5 4M8 7.5V15",
  }),
);

export default class Box3dStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
