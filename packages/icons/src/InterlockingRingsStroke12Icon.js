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
    d: "M4 10a4 4 0 114-4 3.957 3.957 0 01-.167 1.144.495.495 0 01-.622.335.5.5 0 01-.335-.622A3 3 0 104 9a.5.5 0 010 1zm4 0a4.003 4.003 0 01-3.835-5.143.5.5 0 11.96.286A3 3 0 108 3a.5.5 0 010-1 4 4 0 010 8z",
  }),
);

export default class InterlockingRingsStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
