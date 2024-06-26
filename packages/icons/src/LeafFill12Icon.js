import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    focusable: "false",
    viewBox: "0 0 12 12",
  },
  h("path", {
    fill: "currentColor",
    d: "M2.707 10L.854 11.854a.5.5 0 01-.708-.708L2 9.293V5.5C2 2.462 5.5 0 11.5 0a.5.5 0 01.5.5C12 6.497 9.538 10 6.5 10H2.707zM5 6.293L3.146 8.146a.5.5 0 10.708.708L5.707 7H7.5a.5.5 0 000-1h-.793l2.147-2.146a.5.5 0 10-.708-.708L6 5.293V4.5a.5.5 0 00-1 0v1.793z",
  }),
);

export default class LeafFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
