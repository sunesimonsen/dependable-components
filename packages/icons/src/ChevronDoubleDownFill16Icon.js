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
    d: "M13.78 8.375a1 1 0 01-.062 1.321l-.093.085-5 4a1 1 0 01-1.147.072l-.103-.072-5-4a1 1 0 011.147-1.634l.103.072L8 11.72l4.375-3.5a1 1 0 011.406.156zm0-6a1 1 0 01-.062 1.321l-.093.085-5 4a1 1 0 01-1.147.072l-.103-.072-5-4a1 1 0 011.147-1.634l.103.072L8 5.72l4.375-3.5a1 1 0 011.406.156z",
  }),
);

export default class ChevronDoubleDownFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
