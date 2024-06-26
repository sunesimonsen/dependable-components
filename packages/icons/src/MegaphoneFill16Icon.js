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
    d: "M5 4.002h5.586L14.293.295C14.923-.335 16 .11 16 1.002v14c0 .89-1.077 1.337-1.707.707l-3.707-3.707H8v2a2 2 0 11-4 0v-2a4 4 0 010-8h1z",
  }),
);

export default class MegaphoneFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
