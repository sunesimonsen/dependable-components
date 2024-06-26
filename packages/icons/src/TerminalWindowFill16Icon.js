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
    d: "M0 4v11c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4H0zm12.5 9h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5zm-5.91-2.7l-2.65 2.65a.62.62 0 01-.44.18.62.62 0 01-.44-.18.628.628 0 010-.88L5.62 9.5 3.06 6.94a.628.628 0 010-.88c.24-.24.64-.24.88 0L6.59 8.7c.44.44.44 1.16 0 1.6zM16 3V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v2h16z",
  }),
);

export default class TerminalWindowFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
