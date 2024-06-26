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
    d: "M10.293 10.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293zM8.5 5.5a1 1 0 110-2c2.212 0 4 1.788 4 4a1 1 0 11-2 0c0-1.108-.892-2-2-2zm0-3.5a1 1 0 110-2A7.5 7.5 0 0116 7.5a1 1 0 11-2 0A5.5 5.5 0 008.5 2z",
  }),
);

export default class PhoneCallSpeakerFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
