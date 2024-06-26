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
    d: "M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5.03 3.75a3.499 3.499 0 01-6.06 0 .493.493 0 01.18-.68c.24-.14.55-.06.68.18C4.28 8.02 5.11 8.5 6 8.5s1.72-.48 2.17-1.25c.13-.24.44-.32.68-.18.24.14.32.44.18.68z",
  }),
);

export default class SmileyFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
