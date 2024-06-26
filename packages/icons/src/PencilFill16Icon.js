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
    d: "M10.04 2.75l-9.9 9.9A.5.5 0 000 13v2.5c0 .28.22.5.5.5H3c.13 0 .26-.05.35-.15l9.9-9.9-3.21-3.2zm5.46-.46L13.71.5a.996.996 0 00-1.41 0l-1.54 1.54 3.21 3.21 1.54-1.54c.38-.39.38-1.03-.01-1.42z",
  }),
);

export default class PencilFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
