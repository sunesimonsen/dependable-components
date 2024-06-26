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
    "stroke-width": "2",
    d: "M10 1H2m8 3H6m4 3H6m4 3H2",
  }),
  h("path", {
    fill: "currentColor",
    d: "M1.5 8c-.06 0-.13-.01-.19-.04A.499.499 0 011 7.5v-4c0-.2.12-.38.31-.46.19-.08.4-.04.54.11L3.5 4.79c.39.39.39 1.02 0 1.41L1.85 7.85A.47.47 0 011.5 8z",
  }),
);

export default class IndentIncreaseFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
