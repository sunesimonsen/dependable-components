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
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "5", cy: "5", r: "3" }),
    h("path", {
      d: "M9.47 14H.53a.5.5 0 01-.5-.55 5 5 0 019.94 0 .5.5 0 01-.5.55z",
    }),
    h("rect", { width: "7", height: "2", x: "9", y: "3", rx: "1", ry: "1" }),
    h("rect", { width: "7", height: "2", x: "9", y: "7", rx: "1", ry: "1" }),
    h("rect", { width: "5", height: "2", x: "11", y: "11", rx: "1", ry: "1" }),
  ),
);

export default class UserListFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
