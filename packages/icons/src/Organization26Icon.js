import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 23v-8h-4v8H6.9c-.5 0-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v18.2c0 .5-.4.9-.9.9H15zM10 7h6m-6 3h6",
  }),
);

export default class Organization26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
