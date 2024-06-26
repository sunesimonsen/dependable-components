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
    d: "M6 0a6 6 0 11-6 6 .5.5 0 011 0 5 5 0 105-5c-1.448 0-2.695.57-3.865 2H3a.5.5 0 01.492.41l.008.09a.5.5 0 01-.41.492L3 4H1a.5.5 0 01-.492-.41L.5 3.5v-2a.5.5 0 01.992-.09l.008.09v.7C2.828.657 4.313 0 6 0zm-.5 3a.5.5 0 01.492.41L6 3.5v2.793l1.854 1.853a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-2-2a.5.5 0 01-.14-.275L5 6.5v-3a.5.5 0 01.5-.5z",
  }),
);

export default class HistoryStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
