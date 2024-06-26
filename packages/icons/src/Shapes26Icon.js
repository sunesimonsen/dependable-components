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
    d: "M19.75 14a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zM10 15a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1v-8a1 1 0 011-1h8zm3.934-13.49l5.063 9a1 1 0 01-.872 1.49H8a1 1 0 01-.872-1.49l5.063-9a1 1 0 011.743 0z",
  }),
);

export default class Shapes26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
