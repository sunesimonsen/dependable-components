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
    d: "M7 13h2v3H7zm.28-1.09c.54.14 1.13.13 1.76-.1 1.2-.44 1.95-1.64 1.95-2.92v-.56c0-.45-.54-.67-.85-.35l-3.09 3.09c-.28.27-.14.74.23.84zm3.68-9.26A3.005 3.005 0 007.36.06c-1.4.29-2.37 1.61-2.37 3.05v4.56c0 .45.54.67.85.35l4.97-4.97c.11-.1.17-.25.15-.4zM1.5 15a.47.47 0 01-.35-.15c-.2-.2-.2-.51 0-.71l13-13c.2-.2.51-.2.71 0s.2.51 0 .71l-13 13c-.1.1-.23.15-.36.15z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M5.94 13c.62.32 1.32.5 2.06.5 2.49 0 4.5-2.01 4.5-4.5V6.5m-9 0V9c0 .15.01.29.02.44",
  }),
);

export default class MicrophoneOffFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
