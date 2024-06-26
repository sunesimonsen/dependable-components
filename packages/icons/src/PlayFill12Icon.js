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
    d: "M4 11.79c-.13 0-.26-.03-.38-.08a.977.977 0 01-.62-.92V1.21A1 1 0 014.71.5l4.44 4.44c.58.58.58 1.54 0 2.12L4.71 11.5c-.19.19-.45.29-.71.29z",
  }),
);

export default class PlayFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
