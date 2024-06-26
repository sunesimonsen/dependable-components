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
    d: "M6.089 5.716l.057-.07 4-4a.5.5 0 01.765.638l-.057.07L7.207 6l3.647 3.646a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 01-.057-.638zm-5 0l.057-.07 4-4a.5.5 0 01.765.638l-.057.07L2.207 6l3.647 3.646a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 01-.057-.638z",
  }),
);

export default class ChevronDoubleLeftStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
