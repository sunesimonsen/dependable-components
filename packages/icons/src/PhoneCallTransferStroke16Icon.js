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
    d: "M3.707 2.293l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0zM3 3L1.768 4.232a2.5 2.5 0 000 3.536l6.464 6.464a2.5 2.5 0 003.536 0L13 13l-2-2-2 2-6-6 2-2-2-2zM11.646.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L13.793 4H8.136c-.848 0-.848-1 0-1h5.657L11.646.854a.5.5 0 01-.057-.638z",
  }),
);

export default class PhoneCallTransferStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
