import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M13 1a9 9 0 018.996 8.735L22 10a3 3 0 013 3v2a3 3 0 01-3 3l-.29.001a7.006 7.006 0 01-5.954 4.959A2.001 2.001 0 0112 22a2 2 0 013.703-1.05 5.003 5.003 0 003.914-3.028A.995.995 0 0119 17v-6a1 1 0 011-1 7 7 0 00-13.996-.24L6 10a1 1 0 011 1v6a1 1 0 01-1 1H4a3 3 0 01-3-3v-2a3 3 0 013-3 9 9 0 019-9z",
  }),
);

export default class Headset26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
