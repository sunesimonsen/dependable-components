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
  h("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: ".5",
    fill: "none",
    stroke: "currentColor",
    rx: ".5",
    ry: ".5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M.5.5h11V3H.5zM.5 5h11v1H.5zm0 3h11v1H.5zM3 2.5h1v9H3zm3 0h1v9H6z",
  }),
);

export default class TableFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
