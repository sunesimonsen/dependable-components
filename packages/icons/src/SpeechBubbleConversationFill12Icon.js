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
    d: "M1 6.29V3.72a1.985 1.985 0 01-.91-2.3C.35.55 1.22 0 2.12 0h3.41C6.88 0 7.8.68 7.96 1.66 8.18 2.91 7.21 4 6 4H4.5L1.85 6.65A.5.5 0 011 6.29zM7.5 9H6.11c-1 0-1.92-.68-2.08-1.66C3.82 6.09 4.79 5 6 5h3.88c.91 0 1.78.55 2.04 1.42.28.93-.14 1.86-.91 2.31v2.57c0 .45-.54.67-.85.35L7.5 9z",
  }),
);

export default class SpeechBubbleConversationFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
