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
    d: "M11 4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h6zm0 1H5v6h6V5zM7 0a1 1 0 011 1v1.5a.5.5 0 01-1 0V1H1v6h1.5a.5.5 0 010 1H1a1 1 0 01-1-1V1a1 1 0 011-1h6z",
  }),
);

export default class CopyStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
