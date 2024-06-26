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
    d: "M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM4.94 9.94l-3 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88l3-3c.24-.24.64-.24.88 0 .25.24.25.64 0 .88zm10 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-3-3a.628.628 0 010-.88c.24-.24.64-.24.88 0l3 3c.25.24.25.64 0 .88zm0-9L8.8 10.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 3.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.12l6.06-6.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z",
  }),
);

export default class EmailFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
