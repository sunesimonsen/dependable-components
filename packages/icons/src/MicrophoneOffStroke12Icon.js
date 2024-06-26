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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M9.5 5.5V6A3.504 3.504 0 016 9.5a3.369 3.369 0 01-.9-.12M2.5 5.5V6a3.369 3.369 0 00.12.9m-1.102 3.582l8.98-8.98M7.36 6.62a1.409 1.409 0 01-.74.74M4.5 5V2a1.5 1.5 0 013 0",
  }),
  h("path", { fill: "currentColor", d: "M5 9.5h2V12H5z" }),
);

export default class MicrophoneOffStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
