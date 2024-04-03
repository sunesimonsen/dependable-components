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
    d: "M1 .5h14c.28 0 .5.22.5.5v10c0 .28-.22.5-.5.5H8l-3.65 3.65a.5.5 0 01-.85-.35v-3.3H1c-.28 0-.5-.22-.5-.5V1C.5.72.72.5 1 .5z",
  }),
  h("path", {
    fill: "currentColor",
    d: "M10.03 6H8.52l1.96-3.72c.06-.15-.01-.28-.17-.28H7.39c-.16 0-.34.13-.4.28l-1.46 3.4c-.07.16 0 .32.16.32H7l-1.42 4.07c-.11.29-.03.54.34.21l4.13-3.89c.23-.23.22-.39-.02-.39z",
  }),
);

export default class SpeechBubbleLightningBoltStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
