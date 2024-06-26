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
    d: "M11 0a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h10zM2.5 3a1.5 1.5 0 00-1.493 1.356L1 4.5v4l.008.09a.5.5 0 00.984 0L2 8.5V7h1v1.5l.008.09a.5.5 0 00.984 0L4 8.5v-4l-.007-.144A1.5 1.5 0 002.5 3zm3 0a.5.5 0 00-.492.41L5 3.5v5l.008.09a.5.5 0 00.402.402L5.5 9h2l.09-.008a.5.5 0 00.402-.402L8 8.5l-.008-.09a.5.5 0 00-.402-.402L7.5 8H6V3.5l-.008-.09A.5.5 0 005.5 3zm5 0h-2l-.09.008a.5.5 0 000 .984L8.5 4H9v4.5l.008.09a.5.5 0 00.984 0L10 8.5V4h.5l.09-.008a.5.5 0 000-.984L10.5 3zm-8 1a.5.5 0 01.492.41L3 4.5V6H2V4.5l.008-.09A.5.5 0 012.5 4z",
  }),
);

export default class AltTextFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
