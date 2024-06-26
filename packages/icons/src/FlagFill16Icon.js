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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M2.5 15.5V.5",
  }),
  h("path", {
    fill: "currentColor",
    d: "M13.29 9H4V1h9.29c.41 0 .77.24.92.62s.07.8-.22 1.09L11.71 5 14 7.29A1.002 1.002 0 0113.29 9z",
  }),
);

export default class FlagFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
