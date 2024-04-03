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
    h("circle", { cx: "8", cy: "5", r: "3.5" }),
    h("path", {
      "stroke-linecap": "round",
      d: "M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5",
    }),
  ),
);

export default class UserSoloStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
