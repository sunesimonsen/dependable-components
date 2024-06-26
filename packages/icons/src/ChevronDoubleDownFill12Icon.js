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
    d: "M5.387 5.79l-.094-.083-4-4A1 1 0 012.613.21l.094.083L6 3.585 9.293.293a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.32.083zm0 6l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L6 9.585l3.293-3.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.32.083z",
  }),
);

export default class ChevronDoubleDownFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
