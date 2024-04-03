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
    d: "M8.71 1.71l4.44 4.44a.5.5 0 01-.36.85H3.21a.5.5 0 01-.36-.85l4.44-4.44a1 1 0 011.42 0z",
  }),
  h("path", {
    d: "M8.71 14.29l4.44-4.44a.5.5 0 000-.71.48.48 0 00-.35-.14H3.21a.49.49 0 00-.35.85l4.44 4.44a1 1 0 001.41 0z",
  }),
);

export default class SortFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
