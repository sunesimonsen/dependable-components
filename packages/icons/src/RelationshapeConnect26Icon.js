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
  h("path", { fill: "currentColor", d: "M8.1 15.5V8.1H.4V23h15.1v-7.5z" }),
  h("path", { d: "M23.114 13.041l-7.484-2.53 2.53-7.484 7.483 2.53z" }),
);

export default class RelationshapeConnect26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
