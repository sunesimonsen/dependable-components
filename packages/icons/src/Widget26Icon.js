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
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 8h18m-1 14H5c-.5 0-1-.4-1-1V5c0-.5.4-1 1-1h16c.5 0 1 .4 1 1v16c0 .6-.4 1-1 1zM9 18l3-3-3-3m5 6h4",
  }),
);

export default class Widget26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
