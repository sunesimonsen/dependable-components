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
    d: "M6 9a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1v-5a1 1 0 011-1h5zm6.25-.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zM6 10H1v5h5v-5zm6.25-.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM8.857.486l3 5A1 1 0 0111 7H5a1 1 0 01-.857-1.514l3-5a1 1 0 011.714 0zM8 1L5 6h6L8 1z",
  }),
);

export default class ShapesStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
