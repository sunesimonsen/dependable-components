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
    d: "M9.3 5.4c4.9 4.9 4.9 12.7 0 17.6L.5 14.2l8.8-8.8z",
  }),
  h("path", { d: "M19.2 15.4c-3.4-3.4-3.4-9 0-12.4l6.2 6.2-6.2 6.2z" }),
);

export default class RelationshapeChat26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
