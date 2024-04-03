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
    d: "M2 2h12M4 6h8M2 10h12M4 14h8",
  }),
);

export default class AlignCenterFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
