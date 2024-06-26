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
    d: "M14.5 14a.5.5 0 100-1h-13a.5.5 0 100 1h13zm-9-4a.5.5 0 000-1h-4a.5.5 0 000 1h4zm0-4a.5.5 0 000-1h-4a.5.5 0 000 1h4zM9 4h5a1 1 0 011 1v5a1 1 0 01-1 1H9a1 1 0 01-1-1V5a1 1 0 011-1zm0 1v5h5V5H9zM1.5 1a.5.5 0 000 1h13a.5.5 0 100-1h-13z",
  }),
);

export default class WrapRightStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
