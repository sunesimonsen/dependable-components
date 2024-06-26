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
    d: "M7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 5 7 7.586zm3.5-.591a.47.47 0 01-.35-.15l-5-4.996a.473.473 0 01-.11-.54A.5.5 0 015.5 1H10c.55 0 1 .45 1 1v4.495c0 .2-.12.38-.31.46-.06.03-.13.04-.19.04z",
  }),
);

export default class PhoneCallOutFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
