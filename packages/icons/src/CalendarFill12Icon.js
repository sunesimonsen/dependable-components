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
    "stroke-width": "2",
    d: "M3 3V1m6 2V1",
  }),
  h("path", {
    fill: "currentColor",
    d: "M11 2v1c0 1.1-.9 2-2 2s-2-.9-2-2V2H5v1c0 1.1-.9 2-2 2s-2-.9-2-2V2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z",
  }),
);

export default class CalendarFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
