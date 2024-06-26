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
    d: "M7.625 13.78a1 1 0 01-1.321-.062l-.085-.093-4-5a1 1 0 01-.072-1.146l.072-.104 4-5a1 1 0 011.634 1.147l-.072.103L4.28 8l3.5 4.375a1 1 0 01-.156 1.406zm6 0a1 1 0 01-1.321-.062l-.085-.093-4-5a1 1 0 01-.072-1.146l.072-.104 4-5a1 1 0 011.634 1.147l-.072.103L10.28 8l3.5 4.375a1 1 0 01-.156 1.406z",
  }),
);

export default class ChevronDoubleLeftFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
