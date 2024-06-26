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
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    d: "M5.84.9L1.68 3.13c-.11.06-.18.18-.18.31v5.12c0 .13.07.24.18.3l4.15 2.24c.1.06.23.06.33 0l4.15-2.24a.35.35 0 00.18-.3V3.44c0-.13-.07-.24-.18-.3L6.16.9a.307.307 0 00-.32 0zM1.5 3.23L6 5.65l4.5-2.42M6 5.65v5.2",
  }),
);

export default class Box3dStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
