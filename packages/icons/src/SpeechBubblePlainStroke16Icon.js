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
    d: "M1 .5h14c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5H8l-3.6 3.6c-.3.3-.9.1-.9-.4v-3.3H1c-.3 0-.5-.2-.5-.5V1C.5.7.7.5 1 .5z",
  }),
);

export default class SpeechBubblePlainStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
