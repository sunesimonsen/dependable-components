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
    d: "M3 15.5h3a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V8.5h1.453a.497.497 0 00.404-.836L8.354.654a.5.5 0 00-.708 0L.643 7.664a.497.497 0 00.404.836H2.5V15a.5.5 0 00.5.5z",
  }),
);

export default class HomeStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
