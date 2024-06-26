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
    d: "M7 1c2.176 0 4 1.824 4 4 0 1.315-.666 2.501-1.673 3.234C10.869 8.792 12 10.287 12 12c0 2.176-1.824 4-4 4H3.5a.5.5 0 01-.5-.5v-14a.5.5 0 01.5-.5H7zM4 15h4c1.624 0 3-1.376 3-3S9.624 9 8 9H4v6zM7 2H4v6h3c1.624 0 3-1.376 3-3S8.624 2 7 2z",
  }),
);

export default class BoldStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
