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
  h("path", {
    fill: "currentColor",
    d: "M7.94 6.43a.355.355 0 01-.02.1 1.971 1.971 0 01-1.39 1.39.355.355 0 01-.1.02.25.25 0 01-.2-.4l.05-.05 1.24-1.24a.241.241 0 01.17-.07.248.248 0 01.25.25zM8 2v.02a.582.582 0 01-.04.2.516.516 0 01-.08.126c-.033.036-3.03 3.024-3.03 3.024A.5.5 0 014 5.02V2.11A2.076 2.076 0 015.82.01a1.943 1.943 0 011.59.58A1.955 1.955 0 018 2zM5 9.5h2V12H5z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M2.5 5.5V6a3.369 3.369 0 00.12.9M9.5 5.5V6A3.504 3.504 0 016 9.5a3.369 3.369 0 01-.9-.12m-3.582 1.102l8.98-8.98",
  }),
);

export default class MicrophoneOffFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
