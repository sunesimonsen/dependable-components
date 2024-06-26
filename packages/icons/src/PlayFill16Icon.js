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
    d: "M6 15.79c-.13 0-.26-.03-.38-.08a.977.977 0 01-.62-.92V1.21a1 1 0 01.62-.93C6 .12 6.42.21 6.71.5l6.44 6.44c.58.58.58 1.54 0 2.12L6.71 15.5c-.19.19-.45.29-.71.29z",
  }),
);

export default class PlayFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
