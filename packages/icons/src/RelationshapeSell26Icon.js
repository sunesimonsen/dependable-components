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
  h("path", { d: "M11 23v-8H3z" }),
  h("path", { fill: "currentColor", d: "M23 4v19L4 4z" }),
);

export default class RelationshapeSell26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
