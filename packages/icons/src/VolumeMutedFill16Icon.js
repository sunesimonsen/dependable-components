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
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M11.5 10l4-4m-4 0l4 4",
  }),
  h("path", {
    fill: "currentColor",
    d: "M9 15.29c-.26 0-.51-.1-.71-.29l-4-4H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.29l4-4a1.002 1.002 0 011.71.71V14.3a.986.986 0 01-1 .99z",
  }),
);

export default class VolumeMutedFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
