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
    h("circle", { cx: "6", cy: "6", r: "5.5" }),
    h("path", {
      d: "M3.5 4.5v3m5-3v3m-7.8-3h10.6M.7 7.5h10.6M6 .5l-2.5 4M6 .5l2.5 4m-2.5 7l-2.5-4m2.5 4l2.5-4",
    }),
  ),
);

export default class GlobeStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
