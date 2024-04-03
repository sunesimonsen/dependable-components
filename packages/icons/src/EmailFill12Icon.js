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
    d: "M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3.94 7.94l-2 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88l2-2c.24-.24.64-.24.88 0 .25.24.25.64 0 .88zm7 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2-2a.628.628 0 010-.88c.24-.24.64-.24.88 0l2 2c.25.24.25.64 0 .88zm0-7L6.8 7.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 2.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.12l4.06-4.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z",
  }),
);

export default class EmailFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
