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
    d: "M3.854 7.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01-.057-.638l.057-.07 3-3a.5.5 0 01.765.638l-.057.07L1.706 4H5.5a6.5 6.5 0 016.5 6.5.5.5 0 11-1 0 5.5 5.5 0 00-5.279-5.496L5.5 5H1.708l2.146 2.146z",
  }),
);

export default class ArrowLeftUpStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
