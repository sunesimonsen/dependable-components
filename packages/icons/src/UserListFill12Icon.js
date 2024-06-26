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
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "4", cy: "3.5", r: "2.5" }),
    h("path", {
      d: "M7.46 11H.54a.5.5 0 01-.5-.57 4 4 0 017.92 0 .5.5 0 01-.5.57z",
    }),
  ),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "2",
    d: "M9 3h2M9 6h2m-1 3h1",
  }),
);

export default class UserListFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
