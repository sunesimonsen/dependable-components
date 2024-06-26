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
    d: "M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zm3.44 10.06c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L7.5 9.38l-2.56 2.56c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88L6.62 8.5 4.06 5.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L7.5 7.62l2.56-2.56c.24-.24.64-.24.88 0s.24.64 0 .88L8.38 8.5l2.56 2.56z",
  }),
);

export default class XCircleFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
