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
    d: "M10.88 9.53l-4.5-8.5c-.35-.66-1.42-.66-1.77 0l-4.5 8.5A1.006 1.006 0 001 11h9c.35 0 .67-.18.86-.48a1 1 0 00.02-.99zM5 4c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5S5 6.28 5 6V4zm.5 5.3c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8s.8.36.8.8c0 .44-.36.8-.8.8z",
  }),
);

export default class AlertWarningFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
