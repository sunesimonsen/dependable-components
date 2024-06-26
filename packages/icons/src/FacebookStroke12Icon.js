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
    d: "M6 0a6 6 0 110 12A6 6 0 016 0zm0 1a5 5 0 00-.897 9.92V7.63H3.62V6.043h1.484V4.989c0-1.746.847-2.513 2.29-2.513.693 0 1.058.051 1.231.075v1.384H7.64c-.613 0-.827.584-.827 1.242v.867H8.61l-.244 1.585H6.812v3.305A5.001 5.001 0 006 1z",
  }),
);

export default class FacebookStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
