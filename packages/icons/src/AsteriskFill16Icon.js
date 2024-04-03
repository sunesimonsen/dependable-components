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
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M8 1v14M2 4.5l12 7m-12 0l12-7",
  }),
);

export default class AsteriskFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
