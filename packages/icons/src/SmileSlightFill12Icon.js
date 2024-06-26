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
    d: "M6 0a6 6 0 106 6 6 6 0 00-6-6zM3 5a1 1 0 111 1 1 1 0 01-1-1zm5.11 3.45a5.51 5.51 0 01-4.22 0 .62.62 0 01-.34-.81.63.63 0 01.82-.34 4.31 4.31 0 003.26 0 .63.63 0 01.82.34.62.62 0 01-.34.81zM8 6a1 1 0 111-1 1 1 0 01-1 1z",
  }),
);

export default class SmileSlightFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
