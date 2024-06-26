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
    d: "M8 0a8 8 0 11-8 8 .5.5 0 011 0 7 7 0 107-7C5.749 1 3.915 2.063 2.597 4H4.5a.5.5 0 01.492.41L5 4.5a.5.5 0 01-.41.492L4.5 5h-3a.5.5 0 01-.492-.41L1 4.5v-3a.5.5 0 01.992-.09L2 1.5v1.615C3.482 1.118 5.53 0 8 0zm-.5 4.5a.5.5 0 01.492.41L8 5v3.359l2.812 2.25a.5.5 0 01.128.628l-.05.075a.5.5 0 01-.627.128l-.075-.05-3-2.4a.5.5 0 01-.18-.3L7 8.6V5a.5.5 0 01.5-.5z",
  }),
);

export default class HistoryStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
