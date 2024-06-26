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
    d: "M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9.5 9h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zm-7 .12a.62.62 0 01-.44-.18.628.628 0 010-.88L4.12 6 2.06 3.94a.628.628 0 010-.88c.24-.24.64-.24.88 0L5.09 5.2c.44.44.44 1.15 0 1.59L2.94 8.94a.62.62 0 01-.44.18z",
  }),
);

export default class TerminalCliFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
