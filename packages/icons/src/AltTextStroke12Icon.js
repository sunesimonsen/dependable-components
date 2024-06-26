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
    d: "M2.5 3a1.5 1.5 0 011.493 1.356L4 4.5v4a.5.5 0 01-.992.09L3 8.5V7H2v1.5a.5.5 0 01-.992.09L1 8.5v-4A1.5 1.5 0 012.5 3zm3 0a.5.5 0 01.492.41L6 3.5v4.499L7.5 8a.5.5 0 01.492.41L8 8.5a.5.5 0 01-.41.492L7.5 9h-2a.5.5 0 01-.492-.41L5 8.5v-5a.5.5 0 01.5-.5zm5 0a.5.5 0 01.09.992L10.5 4H10v4.5a.5.5 0 01-.992.09L9 8.5V4h-.5a.5.5 0 01-.09-.992L8.5 3h2zm-8 1a.5.5 0 00-.492.41L2 4.5V6h1V4.5a.5.5 0 00-.5-.5z",
  }),
);

export default class AltTextStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
