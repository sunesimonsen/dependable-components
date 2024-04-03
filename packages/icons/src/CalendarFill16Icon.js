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
    "stroke-width": "2",
    d: "M4 1v3m8-3v3",
  }),
  h("path", {
    fill: "currentColor",
    d: "M15 2h-1v2s0 2-2 2-2-2-2-2V2H6v2s0 2-2 2-2-2-2-2V2H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z",
  }),
);

export default class CalendarFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
