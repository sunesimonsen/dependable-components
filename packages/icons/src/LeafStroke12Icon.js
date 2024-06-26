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
    d: "M2.5 8.5v-3c0-2.606 2.656-4.767 8-5l1.005-.003L11.5 1.5c-.242 5.318-2.4 8-5 8h-4l6-6-8 8 2-2v-1zm3-4.5v2.5V4zm0 2.5H8 5.5z",
  }),
);

export default class LeafStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
