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
    d: "M4.5 4.5v7H4a3.5 3.5 0 010-7h.5zm0 7h3V14a1.5 1.5 0 01-3 0v-2.5z",
  }),
  h("path", {
    fill: "currentColor",
    d: "M5 5v6h6l4 4V1l-4 4H5zM14.293.293C14.923-.337 16 .109 16 1v14c0 .89-1.077 1.337-1.707.707L10.586 12H5a1 1 0 01-1-1V5a1 1 0 011-1h5.586L14.293.293z",
  }),
);

export default class MegaphoneStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
