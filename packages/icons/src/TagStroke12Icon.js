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
    d: "M.5 1v3.8c0 .1.1.3.1.4l6 6c.2.2.5.2.7 0l3.8-3.8c.2-.2.2-.5 0-.7l-6-6c0-.1-.2-.2-.3-.2H1C.7.5.5.7.5 1z",
  }),
  h("circle", { cx: "3", cy: "3", r: "1", fill: "currentColor" }),
);

export default class TagStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
