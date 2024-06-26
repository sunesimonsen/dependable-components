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
    h("path", {
      d: "M5.5 10.997a4.955 4.955 0 01-3-4.542c0-2.738 2.24-4.955 5-4.955s5 2.217 5 4.955a4.955 4.955 0 01-3 4.542V12.5h-4v-1.503z",
    }),
    h("path", { "stroke-linejoin": "round", d: "M6.5 7.5h2-2zm1 0V10 7.5z" }),
  ),
  h("path", {
    fill: "currentColor",
    d: "M5 14h5v.727C10 15.43 9.43 16 8.727 16H6.273C5.57 16 5 15.43 5 14.727V14z",
  }),
);

export default class LightbulbStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
