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
    d: "M1 1v3h3V1H1zm3 6a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8a1 1 0 011-1h3zm7 0a1 1 0 011 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h3zM4 8H1v3h3V8zm7 0H8v3h3V8zM4 0a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h3zm7 0a1 1 0 011 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V1a1 1 0 011-1h3zm0 1H8v3h3V1z",
  }),
);

export default class Grid2x2Stroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
