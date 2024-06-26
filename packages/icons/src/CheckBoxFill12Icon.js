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
    d: "M11 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM9.44 4.94l-4 4c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2-2c-.24-.24-.24-.64 0-.88s.64-.24.88 0L5 7.62l3.56-3.56c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z",
  }),
);

export default class CheckBoxFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
