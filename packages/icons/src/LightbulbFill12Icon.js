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
    d: "M1 4.5a4.5 4.5 0 117 3.742V10H3V8.242A4.498 4.498 0 011 4.5zM3 11h5a1 1 0 01-1 1H4a1 1 0 01-1-1zm3-5h.5c.667 0 .667-1 0-1h-2c-.667 0-.667 1 0 1H5v1.5c0 .667 1 .667 1 0V6z",
  }),
);

export default class LightbulbFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
