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
    d: "M10.5 8c-.28 0-.5.22-.5.5V10H8.5c-.28 0-.5.22-.5.5s.25.5.5.5h2c.245 0 .5-.22.5-.5v-2a.5.5 0 00-.5-.5zm-9 0c.28 0 .5.22.5.5V10h1.5c.28 0 .5.22.5.5s-.25.5-.5.5h-2c-.245 0-.5-.22-.5-.5v-2a.5.5 0 01.5-.5zM8 5v2H4V5h4zm0-1H4a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1zm2.5 0c-.28 0-.5-.22-.5-.5V2H8.5c-.28 0-.5-.22-.5-.5s.25-.5.5-.5h2c.245 0 .5.22.5.5v2a.5.5 0 01-.5.5zm-9 0c.28 0 .5-.22.5-.5V2h1.5c.28 0 .5-.22.5-.5S3.75 1 3.5 1h-2c-.245 0-.5.22-.5.5v2a.5.5 0 00.5.5z",
  }),
);

export default class OriginalSizeStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
