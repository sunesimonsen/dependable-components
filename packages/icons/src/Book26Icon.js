import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M19 1c1.105 0 2 .892 2 2v3.27c.596.346 1 .992 1 1.73v15c0 1.099-.897 2-2 2H6.51A3.503 3.503 0 013 21.49V4.506A3.505 3.505 0 016.5 1H19zM5 7.663v13.83A1.503 1.503 0 006.508 23H20V8H6.512A3.498 3.498 0 015 7.663zM16 15a1 1 0 010 2h-6a1 1 0 110-2h6zm0-4a1 1 0 110 2h-6a1 1 0 010-2h6zm3-8H6.5a1.5 1.5 0 10.008 3H19V3z",
  }),
);

export default class Book26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
