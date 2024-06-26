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
    d: "M5.79 6.613l-.083.094-4 4A1 1 0 01.21 9.387l.083-.094L3.585 6 .293 2.707a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083l.094.083 4 4a1 1 0 01.083 1.32zm6 0l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L9.585 6 6.293 2.707a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083l.094.083 4 4a1 1 0 01.083 1.32z",
  }),
);

export default class ChevronDoubleRightFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
