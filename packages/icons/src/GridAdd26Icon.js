import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M19 14a1 1 0 01.993.883L20 15v3h3l.117.007a1 1 0 010 1.986L23 20h-3v3l-.007.117a1 1 0 01-1.986 0L18 23v-3h-3l-.117-.007a1 1 0 010-1.986L15 18h3v-3l.007-.117A1 1 0 0119 14zm-8 0a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 011-1h6zm0-10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h6zm10 0a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1h6z",
  }),
);

export default class GridAdd26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
