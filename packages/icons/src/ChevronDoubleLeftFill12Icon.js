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
    d: "M6.21 5.387l.083-.094 4-4a1 1 0 011.497 1.32l-.083.094L8.415 6l3.292 3.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 01-.083-1.32zm-6 0l.083-.094 4-4a1 1 0 011.497 1.32l-.083.094L2.415 6l3.292 3.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 01-.083-1.32z",
  }),
);

export default class ChevronDoubleLeftFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
