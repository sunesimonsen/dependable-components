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
    d: "M.5 1v5.3c0 .1.1.3.1.4l8.5 8.5c.2.2.5.2.7 0l5.3-5.3c.2-.2.2-.5 0-.7L6.6.6S6.4.5 6.3.5H1C.7.5.5.7.5 1z",
  }),
  h("circle", { cx: "4", cy: "4", r: "1", fill: "currentColor" }),
);

export default class TagStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
