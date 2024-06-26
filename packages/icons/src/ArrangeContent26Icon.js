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
    d: "M7 14v-2a1 1 0 011-1h13a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1m-3 6v-2.16a1 1 0 011-1h13a1 1 0 011 1V20a1 1 0 01-1 1H5a1 1 0 01-1-1M4 8.16V6a1 1 0 011-1h13a1 1 0 011 1v2.17a1 1 0 01-1 1H5a1 1 0 01-1-1",
  }),
);

export default class ArrangeContent26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
