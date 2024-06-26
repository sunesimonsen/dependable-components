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
    d: "M0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8zm9.25-1.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM6.832.445l2 3A1 1 0 018 5H4a1 1 0 01-.832-1.555l2-3a1 1 0 011.664 0z",
  }),
);

export default class ShapesFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
