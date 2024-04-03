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
    d: "M6.5 12.2c-.5.2-1 .3-1.5.3-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c0 .7-.2 1.4-.5 2m.6-6.3c.4-.1.9-.2 1.4-.2 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5c0-.7.2-1.4.5-2",
  }),
);

export default class InterlockingRingsStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
