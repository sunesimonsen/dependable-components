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
    d: "M4 1c.552 0 1 .45 1 1s-.45 1-1 1H3v1c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1h2zm4 0c-.552 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1H8zM7 5H5a1 1 0 100 2h2a1 1 0 100-2zm-3 6c.552 0 1-.45 1-1s-.45-1-1-1H3V8c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2zm4 0c-.552 0-1-.45-1-1s.45-1 1-1h1V8c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1H8z",
  }),
);

export default class OriginalSizeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
