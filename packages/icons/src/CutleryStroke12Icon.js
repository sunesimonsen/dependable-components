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
    "stroke-linejoin": "round",
    d: "M.5 3.5h4v-3 5a2 2 0 11-4 0v-5 3zm2 8v-4 4zm0-8v-3 3zm8-3v11h-1v-4h1-3v-4a3 3 0 013-3z",
  }),
);

export default class CutleryStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
