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
    d: "M12.293 9.5H2a.5.5 0 01-.5-.5V4a.5.5 0 01.5-.5h10.293a.5.5 0 01.354.146l2.5 2.5a.5.5 0 010 .707l-2.5 2.5a.5.5 0 01-.354.147z",
  }),
  h("path", { fill: "currentColor", d: "M7 0h2v2H7zm0 11h2v5H7z" }),
);

export default class SignpostStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
