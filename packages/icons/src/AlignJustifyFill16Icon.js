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
    fill: "currentColor",
    d: "M2 15a1 1 0 010-2h12a1 1 0 010 2H2zm0-4a1 1 0 010-2h12a1 1 0 010 2H2zm0-4a1 1 0 110-2h12a1 1 0 010 2H2zm0-4a1 1 0 110-2h12a1 1 0 010 2H2z",
  }),
);

export default class AlignJustifyFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
