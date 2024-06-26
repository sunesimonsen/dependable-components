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
    d: "M10.5 11a.5.5 0 100-1h-9a.5.5 0 100 1h9zM4 3h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H4zM1.5 1a.5.5 0 000 1h9a.5.5 0 100-1h-9z",
  }),
);

export default class CenterStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
