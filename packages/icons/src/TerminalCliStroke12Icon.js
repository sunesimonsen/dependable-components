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
    d: "M1 1h10a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1zm4.5 8a.5.5 0 010-1h4a.5.5 0 010 1h-4zM2.146 3.854a.5.5 0 11.708-.708L4.957 5.25a.999.999 0 01.005 1.395l-2.1 2.2a.5.5 0 11-.724-.69L4.243 5.95 2.146 3.854zM1 2v8h10V2H1z",
  }),
);

export default class TerminalCliStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
