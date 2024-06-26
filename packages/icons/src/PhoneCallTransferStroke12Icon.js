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
    d: "M2.707 1.293l2 2a1 1 0 010 1.414L4.414 5 7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0zM2 2l-.232.232a2.5 2.5 0 000 3.536l4.464 4.464a2.5 2.5 0 003.536 0L10 10 8 8 7 9 3 5l1-1-2-2zM8.646.146a.5.5 0 01.708 0l1.942 1.94a.49.49 0 01.201.359l.002.027a.536.536 0 01-.002.082.49.49 0 01-.201.36l-1.942 1.94a.5.5 0 11-.708-.708L9.793 3H6.5c-.667 0-.667-1 0-1h3.293L8.646.854A.5.5 0 018.59.216z",
  }),
);

export default class PhoneCallTransferStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
