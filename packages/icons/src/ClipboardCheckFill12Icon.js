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
    d: "M6 0C4.9 0 4 .9 4 2v1h4V2c0-1.1-.9-2-2-2zm4 1h-.5c-.28 0-.5.22-.5.5V3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V1.5c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM8.94 5.94l-3.5 3.5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-1.5-1.5a.628.628 0 010-.88c.24-.24.64-.24.88 0L5 8.12l3.06-3.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z",
  }),
);

export default class ClipboardCheckFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
