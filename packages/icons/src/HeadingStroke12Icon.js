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
    d: "M2.5 1.5v10m6-10v10m-6-5h6",
  }),
);

export default class HeadingStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
