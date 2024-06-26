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
    d: "M5 0h2v1H5zm0 8h2v4H5zm4.29-1H2a1 1 0 01-1-1V3a1 1 0 011-1h7.29a1 1 0 01.71.29l1.5 1.5a1 1 0 010 1.41L10 6.71a1 1 0 01-.71.29z",
  }),
);

export default class SignpostFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
