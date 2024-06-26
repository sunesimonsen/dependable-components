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
    d: "M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zm-2 4a2 2 0 100 4l.117.007A1 1 0 0114 9v1l-.007.117A1 1 0 0112 10v-.5l-.008-.09A.5.5 0 0011 9.5v.5l.005.15A2 2 0 0015 10V9l-.005-.15A2 2 0 0013 7a1 1 0 111-1 .5.5 0 101 0 2 2 0 00-2-2zM8 4a2 2 0 100 4l.117.007A1 1 0 019 9v1l-.007.117A1 1 0 017 10v-.5l-.008-.09A.5.5 0 006 9.5v.5l.005.15A2 2 0 0010 10V9l-.005-.15A2 2 0 008 7a1 1 0 111-1 .5.5 0 001 0 2 2 0 00-2-2zM3 4a2 2 0 00-2 2v4l.005.15A2 2 0 005 10v-.5l-.008-.09A.5.5 0 004 9.5v.5l-.007.117A1 1 0 012 10V6l.007-.117A1 1 0 014 6v.5l.008.09A.5.5 0 005 6.5V6l-.005-.15A2 2 0 003 4z",
  }),
);

export default class CssFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
