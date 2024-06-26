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
    d: "M10.5 11c0 .3-.2.5-.5.5H2.5s-1 0-1-1v-9s0 1 1 1H10c.3 0 .5.2.5.5v8zm-9-9.5s0-1 1-1H9s.5 0 .5.5v1.5m-5 3h3m-3 2h3",
  }),
);

export default class BookClosedStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
