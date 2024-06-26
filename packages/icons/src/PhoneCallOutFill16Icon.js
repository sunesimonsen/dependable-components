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
    d: "M10.293 10.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293zM13.5 9a.47.47 0 01-.35-.15l-6-6a.474.474 0 01-.11-.54c.08-.19.26-.31.46-.31H13c.55 0 1 .45 1 1v5.5c0 .2-.12.38-.31.46-.06.03-.13.04-.19.04z",
  }),
);

export default class PhoneCallOutFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
