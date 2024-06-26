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
    d: "M5.911 6.284l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07L4.793 6 1.146 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638zm5 0l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07L9.793 6 6.146 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638z",
  }),
);

export default class ChevronDoubleRightStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
