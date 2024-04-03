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
  h("path", { d: "M7 7.8l6-6 6 6z" }),
  h("path", { fill: "currentColor", d: "M.5 23L13 10.4 25.5 23z" }),
);

export default class RelationshapeGuide26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
