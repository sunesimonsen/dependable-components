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
    d: "M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zM7 4.5c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5S7 9.28 7 9V4.5zm.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
  }),
);

export default class AlertErrorFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
