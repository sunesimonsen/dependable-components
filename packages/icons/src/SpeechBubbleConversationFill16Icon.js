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
    d: "M9 0H3.16C2.03 0 .93.56.38 1.54A2.97 2.97 0 001 5.22v3.07c0 .45.54.67.85.35L4.5 6h4.38c1.45 0 2.78-.98 3.06-2.4C12.31 1.68 10.85 0 9 0zm4 7H7.12c-1.45 0-2.79.98-3.06 2.4A3.004 3.004 0 007 13h4.5l2.65 2.65a.5.5 0 00.85-.35v-3.07c.63-.56 1-1.37 1-2.22A3.01 3.01 0 0013 7z",
  }),
);

export default class SpeechBubbleConversationFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
