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
    d: "M3.5 10a.5.5 0 110 1H1a1 1 0 01-1-1V1a1 1 0 011-1h9a1 1 0 011 1v2.5a.5.5 0 11-1 0V1H1v9h2.5zM6 6v9h9V6H6zm0-1h9a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z",
  }),
);

export default class CopyStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
