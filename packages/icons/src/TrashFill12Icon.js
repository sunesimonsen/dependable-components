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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M2 2.5h8",
  }),
  h("path", {
    fill: "currentColor",
    d: "M2 4v7c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4H2zm3 5.5c0 .28-.22.5-.5.5S4 9.78 4 9.5V6c0-.28.22-.5.5-.5s.5.22.5.5v3.5zm3 0c0 .28-.22.5-.5.5S7 9.78 7 9.5V6c0-.28.22-.5.5-.5s.5.22.5.5v3.5zM8 3H4V1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2z",
  }),
);

export default class TrashFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
