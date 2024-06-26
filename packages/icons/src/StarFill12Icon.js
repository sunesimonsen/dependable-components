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
    d: "M2.88 11.73c-.19 0-.39-.06-.55-.18a.938.938 0 01-.37-1.01l.8-3L.35 5.57a.938.938 0 01-.3-1.03c.12-.37.45-.63.85-.65L4 3.73 5.12.83c.14-.37.49-.61.88-.61s.74.24.88.6L8 3.73l3.11.17a.946.946 0 01.55 1.68L9.24 7.53l.8 3a.95.95 0 01-1.43 1.04L6 9.88l-2.61 1.69c-.16.1-.34.16-.51.16z",
  }),
);

export default class StarFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
