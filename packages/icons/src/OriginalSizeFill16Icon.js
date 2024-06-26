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
    d: "M12 15c-.552 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1h-2zm-8 0c.552 0 1-.45 1-1s-.45-1-1-1H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2zm7-10H5a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1zm1-4c-.552 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1h-2zM4 1c.552 0 1 .45 1 1s-.45 1-1 1H3v1c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1h2z",
  }),
);

export default class OriginalSizeFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
