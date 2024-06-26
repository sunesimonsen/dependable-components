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
    d: "M7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 5 7 7.586zM9.85.15L11.5 1.8c.39.39.39 1.02 0 1.41L9.85 4.85A.47.47 0 019.5 5c-.06 0-.13-.01-.19-.04A.499.499 0 019 4.5V3H6.5a.5.5 0 110-1H9V.5c0-.2.12-.38.31-.46.19-.08.4-.04.54.11z",
  }),
);

export default class PhoneCallTransferFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
