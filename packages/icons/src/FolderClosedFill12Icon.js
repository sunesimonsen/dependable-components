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
    d: "M10 11H2c-.55 0-1-.45-1-1V3.5C1 2.67 1.67 2 2.5 2h3C6.33 2 7 2.67 7 3.5V4h3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1z",
  }),
);

export default class FolderClosedFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
