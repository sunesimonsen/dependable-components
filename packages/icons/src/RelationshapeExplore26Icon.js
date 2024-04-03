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
  h("path", { fill: "currentColor", d: "M.6 22.9l8.7-15 8.7 15z" }),
  h("path", { d: "M16.8 13V3.1l8.6 5z" }),
);

export default class RelationshapeExplore26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
