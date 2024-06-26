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
    d: "M2 13.5C2 19.302 6.921 24 13 24s11-4.698 11-10.5V3c-6.079 0-11 4.698-11 10.5C13 7.698 8.079 3 2 3v10.5z",
  }),
);

export default class Garden26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
