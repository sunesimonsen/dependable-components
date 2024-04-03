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
  h("path", { d: "M19 3c0 2.94-2.69 6-6 6S7 5.926 7 3h12z" }),
  h("path", {
    fill: "currentColor",
    d: "M24 12c0 6.708-4.923 11-10.993 11S2.015 18.708 2 12h22z",
  }),
);

export default class RelationshapeGather26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
