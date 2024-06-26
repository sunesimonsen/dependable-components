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
    d: "M5.716 5.911l-.07-.057-4-4a.5.5 0 01.638-.765l.07.057L6 4.793l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057zm0 5l-.07-.057-4-4a.5.5 0 01.638-.765l.07.057L6 9.793l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057z",
  }),
);

export default class ChevronDoubleDownStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
