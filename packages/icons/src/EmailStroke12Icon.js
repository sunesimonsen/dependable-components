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
    d: "M11 1a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h10zm0 1.707L6.715 7.002a1 1 0 01-1.419.002L1 2.707v6.585l2.146-2.146a.5.5 0 11.708.708L1.706 10h8.587L8.146 7.854a.5.5 0 11.708-.708L11 9.293V2.707zM10.293 2H1.707l4.298 4.298L10.293 2z",
  }),
);

export default class EmailStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
