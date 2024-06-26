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
    d: "M3.707 2.293l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0zM3 3L1.768 4.232a2.5 2.5 0 000 3.536l6.464 6.464a2.5 2.5 0 003.536 0L13 13l-2-2-2 2-6-6 2-2-2-2zm5.5 1.998a.5.5 0 110-1c1.936 0 3.5 1.563 3.5 3.499a.5.5 0 01-1 0 2.495 2.495 0 00-2.5-2.5zm0-3.498a.5.5 0 110-1 7.002 7.002 0 017 6.997.5.5 0 01-1 0 5.996 5.996 0 00-6-5.997z",
  }),
);

export default class PhoneCallSpeakerStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
