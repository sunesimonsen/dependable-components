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
    d: "M14.5 11c-.28 0-.5.22-.5.5V13h-1.5c-.28 0-.5.22-.5.5s.25.5.5.5h2c.245 0 .5-.22.5-.5v-2a.5.5 0 00-.5-.5zm-13 0c.28 0 .5.22.5.5V13h1.5c.28 0 .5.22.5.5s-.25.5-.5.5h-2c-.245 0-.5-.22-.5-.5v-2a.5.5 0 01.5-.5zM12 4H4a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1zm0 1v5H4V5h8zm2.5-1c-.28 0-.5-.22-.5-.5V2h-1.5c-.28 0-.5-.22-.5-.5s.25-.5.5-.5h2c.245 0 .5.22.5.5v2a.5.5 0 01-.5.5zm-13 0c.28 0 .5-.22.5-.5V2h1.5c.28 0 .5-.22.5-.5S3.75 1 3.5 1h-2c-.245 0-.5.22-.5.5v2a.5.5 0 00.5.5z",
  }),
);

export default class OriginalSizeStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
