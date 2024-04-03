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
    d: "M2.1 5.5H15m-14.1 5h13m-1.9-9l-3 13m-2-13l-3 13",
  }),
);

export default class NumberStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
