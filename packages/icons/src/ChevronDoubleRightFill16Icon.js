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
    d: "M8.375 2.22a1 1 0 011.321.062l.085.093 4 5a1 1 0 01.072 1.147l-.072.103-4 5a1 1 0 01-1.634-1.147l.072-.103L11.72 8l-3.5-4.375a1 1 0 01.156-1.406zm-6 0a1 1 0 011.321.062l.085.093 4 5a1 1 0 01.072 1.147l-.072.103-4 5a1 1 0 01-1.634-1.147l.072-.103L5.72 8l-3.5-4.375a1 1 0 01.156-1.406z",
  }),
);

export default class ChevronDoubleRightFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
