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
    d: "M14.3 5.2L5.4 2.7l-2.5 8.9-2.5 8.9 8.9 2.4 2.5-8.8z",
  }),
  h("path", { d: "M14.223 14.131l8.853-2.503 2.503 8.853-8.853 2.503z" }),
);

export default class RelationshapeSupport26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
