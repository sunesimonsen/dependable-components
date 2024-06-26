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
    d: "M3.5 3.5v5H3a2.5 2.5 0 010-5h.5zm0 5h2v2a1 1 0 01-2 0v-2z",
  }),
  h("path", {
    fill: "currentColor",
    d: "M4 4v4h4l3 3V1L8 4H4zm3.586-1L10.293.293C10.923-.337 12 .109 12 1v10c0 .89-1.077 1.337-1.707.707L7.586 9H4a1 1 0 01-1-1V4a1 1 0 011-1h3.586z",
  }),
);

export default class MegaphoneStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
