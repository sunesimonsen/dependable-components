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
    d: "M1.11 4L2.015.379A.5.5 0 012.5 0h7a.5.5 0 01.485.379L10.89 4H11a1 1 0 011 1v4a1 1 0 01-1 1v1a1 1 0 01-2 0v-1H3v1a1 1 0 01-2 0v-1a1 1 0 01-1-1V5a1 1 0 011-1h.11zM3 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zM2.89 1l-.75 3h7.72l-.75-3H2.89z",
  }),
);

export default class CarFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
