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
  h("path", {
    fill: "currentColor",
    d: "M11 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h1v2.29c0 .45.54.67.85.35L5.5 9H11c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z",
  }),
);

export default class SpeechBubblePlainFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
