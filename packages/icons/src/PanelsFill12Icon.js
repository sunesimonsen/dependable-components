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
    d: "M5 0H2c-.6 0-1 .4-1 1v7h4V0zm1 3h5V1c0-.6-.4-1-1-1H6v3zm0 9h4c.6 0 1-.4 1-1V4H6v8zM5 9H1v2c0 .6.4 1 1 1h3V9z",
  }),
);

export default class PanelsFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
