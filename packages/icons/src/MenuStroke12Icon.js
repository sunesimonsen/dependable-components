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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M1.5 2.5h9m-9 3h9m-9 3h9",
  }),
);

export default class MenuStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
