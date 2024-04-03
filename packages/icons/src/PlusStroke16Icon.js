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
    d: "M7.5 2.5v12m6-6h-12",
  }),
);

export default class PlusStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
