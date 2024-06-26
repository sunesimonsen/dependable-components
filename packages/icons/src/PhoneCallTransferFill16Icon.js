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
    d: "M10.293 10.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293zM12.85.149l2.65 2.65c.39.39.39 1.02 0 1.41l-2.65 2.65a.5.5 0 01-.85-.36V3.998H8a.5.5 0 010-1h4v-2.5c0-.45.54-.67.85-.35z",
  }),
);

export default class PhoneCallTransferFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
