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
  h("circle", { cx: "4.9", cy: "7.4", r: "4.4" }),
  h("circle", { cx: "18", cy: "15.5", r: "7.5", fill: "currentColor" }),
);

export default class RelationshapeMessage26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
