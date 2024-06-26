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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M1.5 11.5h9M6 8.5v-8",
  }),
  h("path", {
    fill: "currentColor",
    d: "M6 9.29c-.26 0-.51-.09-.71-.29L2.15 5.85a.474.474 0 01-.11-.54c.08-.19.26-.31.46-.31h7c.2 0 .38.12.46.31s.04.4-.11.54L6.71 9c-.2.2-.45.29-.71.29z",
  }),
);

export default class DownloadFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
