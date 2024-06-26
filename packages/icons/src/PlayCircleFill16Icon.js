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
    d: "M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm2.79 8.71l-3.94 3.94a.5.5 0 01-.85-.36V3.71c0-.45.54-.67.85-.35l3.94 3.94c.39.38.39 1.02 0 1.41z",
  }),
);

export default class PlayCircleFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
