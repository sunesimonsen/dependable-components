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
    d: "M10 10.586l1.293-1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95L2.293.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L5.414 6 10 10.586z",
  }),
);

export default class PhoneFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
