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
    d: "M2.5 5.5h12m-13 5h12m-1.5-9l-3 13m-2-13l-3 13",
  }),
);

export default class NumberFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
