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
    d: "M1 1v5h5V1H1zm5 8a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1v-5a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm-9 1H1v5h5v-5zm9 0h-5v5h5v-5zM6 0a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1a1 1 0 011-1h5zm0 1h-5v5h5V1z",
  }),
);

export default class Grid2x2Stroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
