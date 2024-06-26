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
    d: "M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4.44 10.06c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L1.41 8.8c-.44-.44-.44-1.15 0-1.59l2.15-2.15c.24-.24.64-.24.88 0s.24.64 0 .88L2.38 8l2.06 2.06zm6.14-6.83l-4 10c-.1.24-.33.39-.58.39-.08 0-.16-.01-.23-.04a.623.623 0 01-.35-.81l4-10a.623.623 0 111.16.46zm4.01 5.57l-2.15 2.15c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88L13.62 8l-2.06-2.06a.628.628 0 010-.88c.24-.24.64-.24.88 0l2.15 2.15c.44.43.44 1.15 0 1.59z",
  }),
);

export default class MarkupFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
