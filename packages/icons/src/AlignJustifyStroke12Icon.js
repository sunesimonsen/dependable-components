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
    d: "M1.5 11a.5.5 0 110-1h9a.5.5 0 110 1h-9zm0-3a.5.5 0 010-1h9a.5.5 0 110 1h-9zm0-3a.5.5 0 010-1h9a.5.5 0 110 1h-9zm0-3a.5.5 0 010-1h9a.5.5 0 110 1h-9z",
  }),
);

export default class AlignJustifyStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
