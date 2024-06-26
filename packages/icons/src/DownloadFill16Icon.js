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
    d: "M8 12V.5m-6.5 15h13",
  }),
  h("path", {
    fill: "currentColor",
    d: "M12.24 8.84l-3.5 3.85c-.4.44-1.08.44-1.48 0l-3.5-3.85A.504.504 0 014.13 8h7.74c.43 0 .66.52.37.84z",
  }),
);

export default class DownloadFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
