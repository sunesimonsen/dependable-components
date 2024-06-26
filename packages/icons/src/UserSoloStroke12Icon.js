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
    { fill: "none", stroke: "currentColor" },
    h("circle", { cx: "6", cy: "3", r: "2.5" }),
    h("path", {
      "stroke-linecap": "round",
      d: "M1.5 11.5c.2-2.3 2.2-4 4.5-4s4.3 1.7 4.5 4",
    }),
  ),
);

export default class UserSoloStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
