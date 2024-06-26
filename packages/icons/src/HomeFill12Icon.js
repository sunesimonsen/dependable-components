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
    d: "M10 12H8.5a.5.5 0 01-.5-.5v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5H2a1 1 0 01-1-1V6.995a1.046 1.046 0 01-.879-.637.95.95 0 01.228-1.054L5.221.331a1.09 1.09 0 011.558 0l4.88 4.981a.947.947 0 01.22 1.046 1.046 1.046 0 01-.879.637V11a1 1 0 01-1 1z",
  }),
);

export default class HomeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
