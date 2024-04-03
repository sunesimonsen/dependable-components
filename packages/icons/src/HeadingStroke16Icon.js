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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M2.5 1.5v14m10-14v14m-10-7h10",
  }),
);

export default class HeadingStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
