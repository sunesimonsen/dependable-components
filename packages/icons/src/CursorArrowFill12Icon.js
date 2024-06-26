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
    d: "M7.587 8.294l-1.147 3.06c-.314.836-1.482.874-1.849.06l-4.5-10C-.286.574.575-.286 1.414.09l10 4.5c.814.367.776 1.535-.06 1.849l-3.06 1.147 3.563 3.563a.5.5 0 11-.707.707L7.587 8.294z",
  }),
);

export default class CursorArrowFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
