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
    d: "M1.5 3.5l2.1 2.1c.2.2.2.5 0 .7L1.5 8.5m9-7h-9m9 3h-5m5 3h-5m5 3h-9",
  }),
);

export default class IndentIncreaseStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
