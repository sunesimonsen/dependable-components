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
    d: "M1 1h14a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1zm6.5 11a.5.5 0 110-1h5a.5.5 0 110 1h-5zM3.146 5.354a.5.5 0 11.708-.708L6.457 7.25a.999.999 0 01.003 1.397l-2.6 2.7a.5.5 0 11-.72-.694L5.743 7.95 3.146 5.354zM1 2v12h14V2H1z",
  }),
);

export default class TerminalCliStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
