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
    d: "M10.354 8.354a.5.5 0 01-.638.057l-.07-.057L6 4.707 2.354 8.354a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 4-4a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 010 .708z",
  }),
);

export default class ChevronUpStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
