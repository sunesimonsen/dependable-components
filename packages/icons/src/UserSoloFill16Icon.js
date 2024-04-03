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
    h("circle", { cx: "8", cy: "5", r: "4" }),
    h("path", {
      d: "M8 10a6 6 0 00-6 5.47.5.5 0 00.5.53h10.97a.5.5 0 00.5-.53A6 6 0 008 10z",
    }),
  ),
);

export default class UserSoloFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
