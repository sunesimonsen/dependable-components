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
    d: "M5.5 12C2.46 12 0 9.54 0 6.5S2.46 1 5.5 1 11 3.46 11 6.5 8.54 12 5.5 12zM5 9.5c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3zM5.5 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z",
  }),
);

export default class InfoFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
