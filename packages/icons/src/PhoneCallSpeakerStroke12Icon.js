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
    d: "M2.707 1.293l2 2a1 1 0 010 1.414L4.414 5 7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0zM2 2l-.232.232a2.5 2.5 0 000 3.536l4.464 4.464a2.5 2.5 0 003.536 0L10 10 8 8 7 9 3 5l1-1-2-2zm4.5 0c1.953 0 3.53 1.58 3.53 3.53a.5.5 0 01-1 0C9.03 4.132 7.9 3 6.5 3a.5.5 0 110-1zm.23-2A5.27 5.27 0 0112 5.27a.5.5 0 11-1 0A4.27 4.27 0 006.73 1a.5.5 0 110-1z",
  }),
);

export default class PhoneCallSpeakerStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
