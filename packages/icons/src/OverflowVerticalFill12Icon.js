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
    d: "M7.5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  }),
);

export default class OverflowVerticalFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
