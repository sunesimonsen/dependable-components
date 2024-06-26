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
    d: "M7 8.293l-2.854 2.853a.5.5 0 00.708.708L7.707 9H11a.5.5 0 100-1H8.707l3.147-3.146a.5.5 0 00-.708-.708L8 7.293V5a.5.5 0 00-1 0v3.293zM3.707 13L.854 15.854a.5.5 0 01-.708-.708L3 12.293V7.167C3 3.209 7.5 0 15.5 0a.5.5 0 01.5.5c0 8-3.209 12.5-7.167 12.5H3.707z",
  }),
);

export default class LeafFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
