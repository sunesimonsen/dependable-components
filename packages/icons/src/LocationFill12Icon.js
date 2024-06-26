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
    d: "M6 0a4.88 4.88 0 00-5 4.76c0 1.77.8 2.69 1.82 4 .9 1.13 1.93 2.15 2.82 3.1a.48.48 0 00.72 0c.9-1 2-2 2.81-3.1.94-1.27 1.83-2.23 1.83-4A5.11 5.11 0 006 0zm0 7a2 2 0 112-2 2 2 0 01-2 2z",
  }),
);

export default class LocationFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
