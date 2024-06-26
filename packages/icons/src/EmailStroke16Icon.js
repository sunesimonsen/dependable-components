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
    d: "M15 2a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h14zm0 1.707l-6.285 6.295a1 1 0 01-1.419.002L1 3.707v8.585l3.146-3.146a.5.5 0 11.708.708L1.706 13h12.587l-3.147-3.146a.5.5 0 01.708-.708L15 12.293V3.707zM14.292 3H1.707l6.298 6.298L14.292 3z",
  }),
);

export default class EmailStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
