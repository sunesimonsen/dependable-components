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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M1 8.5h14.5m-10-5L.9 8.1c-.2.2-.2.5 0 .7l4.6 4.6",
  }),
);

export default class ArrowLeftStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
