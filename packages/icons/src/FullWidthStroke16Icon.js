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
    d: "M14.5 13a.5.5 0 110 1h-13a.5.5 0 110-1h13zM14 4H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zm0 1v5H2V5h12zm.5-4a.5.5 0 110 1h-13a.5.5 0 010-1h13z",
  }),
);

export default class FullWidthStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
