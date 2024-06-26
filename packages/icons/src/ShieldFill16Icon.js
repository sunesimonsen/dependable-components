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
    d: "M8 16c-.06 0-.12-.01-.18-.03C7.75 15.94 1 13.25 1 5V3c0-.21.13-.39.32-.47l6.5-2.5c.12-.04.24-.04.36 0l6.5 2.5c.19.08.32.26.32.47v2c0 8.25-6.75 10.94-6.82 10.97-.06.02-.12.03-.18.03z",
  }),
);

export default class ShieldFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
