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
    d: "M3 4a2 2 0 011.995 1.85L5 6v5.5a.5.5 0 01-.992.09L4 11.5V9H2v2.5a.5.5 0 01-.992.09L1 11.5V6a2 2 0 012-2zm4.5 0a.5.5 0 01.492.41L8 4.5v6.499L9.5 11a.5.5 0 01.492.41l.008.09a.5.5 0 01-.41.492L9.5 12h-2a.5.5 0 01-.492-.41L7 11.5v-7a.5.5 0 01.5-.5zm7 0a.5.5 0 01.09.992L14.5 5H13v6.5a.5.5 0 01-.992.09L12 11.5V5h-1.5a.5.5 0 01-.09-.992L10.5 4h4zM3 5a1 1 0 00-.993.883L2 6v2h2V6a1 1 0 00-1-1z",
  }),
);

export default class AltTextStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
