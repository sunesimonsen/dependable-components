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
    d: "M4.5 10.5l4.1 4.1c.4.4.9.1.9-.3V1.7c0-.4-.5-.7-.9-.3L4.5 5.5H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h3.5zm7.3-.7c.5-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8m2.1 5.6c1-1 1.6-2.3 1.6-3.8s-.6-2.9-1.6-3.9",
  }),
);

export default class VolumeUnmutedStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
