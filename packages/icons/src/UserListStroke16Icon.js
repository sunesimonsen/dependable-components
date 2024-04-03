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
    { fill: "none", stroke: "currentColor" },
    h("circle", { cx: "5", cy: "5", r: "2.5" }),
    h("path", {
      "stroke-linecap": "round",
      d: "M9.5 5.5h6m-6 3h6m-4 3h4m-6 2c-.2-2.3-2.2-4-4.5-4s-4.3 1.8-4.5 4",
    }),
  ),
);

export default class UserListStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
