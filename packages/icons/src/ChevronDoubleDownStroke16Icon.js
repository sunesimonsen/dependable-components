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
    fill: "currentColor",
    d: "M13.39 8.188a.5.5 0 01-.013.64l-.065.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 11.859l4.688-3.75a.5.5 0 01.702.079zm0-5a.5.5 0 01-.013.64l-.065.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 6.859l4.688-3.75a.5.5 0 01.702.079z",
  }),
);

export default class ChevronDoubleDownStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
