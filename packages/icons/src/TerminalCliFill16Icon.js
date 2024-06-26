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
    d: "M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-2.5 11h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5zM6.59 8.8l-2.65 2.65a.62.62 0 01-.44.18.62.62 0 01-.44-.18.628.628 0 010-.88L5.62 8 3.06 5.44a.628.628 0 010-.88c.24-.24.64-.24.88 0L6.59 7.2c.44.44.44 1.16 0 1.6z",
  }),
);

export default class TerminalCliFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
