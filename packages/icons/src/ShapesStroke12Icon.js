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
    d: "M4 7a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8a1 1 0 011-1h3zm5.25-.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM4 8H1v3h3V8zm5.25-.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM6.832.445l2 3A1 1 0 018 5H4a1 1 0 01-.832-1.555l2-3a1 1 0 011.664 0zM6 1L4 4h4L6 1z",
  }),
);

export default class ShapesStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
