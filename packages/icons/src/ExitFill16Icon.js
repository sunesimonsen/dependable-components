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
  h("path", {
    fill: "currentColor",
    d: "M3 15.93c-.23 0-.45-.08-.64-.23l-2-1.67a.987.987 0 01-.36-.76V2.73c0-.3.13-.58.36-.77l2-1.67c.3-.24.71-.29 1.06-.13a1 1 0 01.58.91v13.87a1 1 0 01-.58.91c-.13.05-.28.08-.42.08zM12 11V5c0-.45.54-.67.85-.35L15.5 7.3c.39.39.39 1.02 0 1.41l-2.65 2.65A.5.5 0 0112 11z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M3.5 2.5H9c.28 0 .5.22.5.5v2.5m-6 8H9c.28 0 .5-.22.5-.5v-2.5M15 8H7",
  }),
);

export default class ExitFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
