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
    d: "M2 15a1 1 0 010-2h12a1 1 0 010 2H2zM14 5h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1zM2 11a1 1 0 010-2h4a1 1 0 110 2H2zm0-4a1 1 0 110-2h4a1 1 0 110 2H2zm0-4a1 1 0 110-2h12a1 1 0 010 2H2z",
  }),
);

export default class WrapRightFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
