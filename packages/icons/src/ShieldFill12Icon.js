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
    d: "M6 12c-.81 0-5-2.78-5-8V2.5c0-.2.12-.38.3-.46l4.5-2a.49.49 0 01.41 0l4.5 2c.17.08.29.26.29.46V4c0 5.22-4.19 8-5 8zm.05-1z",
  }),
);

export default class ShieldFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
