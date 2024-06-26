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
    d: "M8.293 7.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 5.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 4 8 7.586l.293-.293zM11 10L9 8 8 9 3 4l1-1-2-2-.232.232a2.5 2.5 0 000 3.536l5.464 5.464a2.5 2.5 0 003.536 0L11 10z",
  }),
);

export default class PhoneStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
