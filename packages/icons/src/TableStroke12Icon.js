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
    d: "M11 0a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h10zM3 9H1v2h2V9zm3 0H4v2h2V9zm5 0H7v2h4V9zM3 6H1v2h2V6zm3 0H4v2h2V6zm5 0H7v2h4V6zM3 3H1v2h2V3zm3 0H4v2h2V3zm5 0H7v2h4V3zm0-2H1v1h10V1z",
  }),
);

export default class TableStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
