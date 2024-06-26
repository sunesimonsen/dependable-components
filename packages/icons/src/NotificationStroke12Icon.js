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
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    d: "M9.5 6S9.5.5 6 .5 2.5 6 2.5 6C1.46 6 1.14 7.19 1.04 7.93c-.04.3.2.57.5.57h8.92c.3 0 .54-.27.5-.57C10.86 7.19 10.54 6 9.5 6zm-5 3c0 .83.67 1.5 1.5 1.5S7.5 9.83 7.5 9",
  }),
);

export default class NotificationStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
