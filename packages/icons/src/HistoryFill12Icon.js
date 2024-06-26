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
    d: "M6 0a6 6 0 11-6 6 .5.5 0 011 0 5 5 0 105-5c-1.24 0-2.333.418-3.356 1.436l.71.71A.5.5 0 013 4H1a.5.5 0 01-.5-.5v-2a.5.5 0 01.854-.354l.584.583C3.153.521 4.496 0 6 0zm-.5 3a.5.5 0 01.492.41L6 3.5v2.793l1.854 1.853a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-2-2a.5.5 0 01-.14-.275L5 6.5v-3a.5.5 0 01.5-.5z",
  }),
);

export default class HistoryFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
