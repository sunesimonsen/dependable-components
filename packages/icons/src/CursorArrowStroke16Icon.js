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
    d: "M11.217 10.51l4.637 4.636a.5.5 0 01-.708.708l-4.636-4.637-2.116 4.23a1 1 0 01-1.801-.026l-6.5-14C-.299.576.576-.299 1.421.093l14 6.5a1 1 0 01.026 1.801l-4.23 2.116zM7.5 15l2.5-5 5-2.5L1 1l6.5 14z",
  }),
);

export default class CursorArrowStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
