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
    d: "M6 0a6 6 0 01.813 11.945V7.63h1.552l.244-1.585H6.812v-.867c0-.658.214-1.242.827-1.242h.985V2.55c-.173-.024-.538-.075-1.23-.075-1.444 0-2.29.767-2.29 2.513v1.055H3.618v1.585h1.484v4.304A6.001 6.001 0 016 0z",
  }),
);

export default class FacebookFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
