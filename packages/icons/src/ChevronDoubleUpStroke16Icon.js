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
    d: "M2.61 7.812a.5.5 0 01.013-.64l.065-.062 5-4a.5.5 0 01.542-.054l.082.054 5 4a.5.5 0 01-.55.83l-.074-.05L8 4.141l-4.688 3.75a.5.5 0 01-.702-.079zm0 5a.5.5 0 01.013-.64l.065-.062 5-4a.5.5 0 01.542-.054l.082.054 5 4a.5.5 0 01-.55.83l-.074-.05L8 9.141l-4.688 3.75a.5.5 0 01-.702-.079z",
  }),
);

export default class ChevronDoubleUpStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
