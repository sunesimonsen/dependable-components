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
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M2 1h8M2 4h5M2 7h8m-8 3h5",
  }),
);

export default class AlignLeftFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
