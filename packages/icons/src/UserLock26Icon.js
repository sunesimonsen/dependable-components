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
  h(
    "g",
    { fill: "currentColor" },
    h("circle", { cx: "10", cy: "9", r: "4" }),
    h("path", {
      d: "M3.968 21A.959.959 0 013 20.052a.994.994 0 01.008-.134 7.09 7.09 0 0113.984 0 .958.958 0 01-.822 1.074 1.049 1.049 0 01-.137.008zM19.342 5.005A2.5 2.5 0 0017 7.346v2.075h1.443V7.346a1.057 1.057 0 112.114 0v2.075H22V7.346a2.5 2.5 0 00-2.658-2.341z",
    }),
    h("rect", { width: "7", height: "6", x: "16", y: "9", rx: "1", ry: "1" }),
  ),
);

export default class UserLock26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
