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
    d: "M10.5 11a.5.5 0 100-1h-9a.5.5 0 100 1h9zM2 3h8a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h8V4H2zm-.5-3a.5.5 0 000 1h9a.5.5 0 100-1h-9z",
  }),
);

export default class FullWidthStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
