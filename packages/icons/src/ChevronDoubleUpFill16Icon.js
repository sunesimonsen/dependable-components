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
    d: "M2.22 7.625a1 1 0 01.062-1.321l.093-.085 5-4a1 1 0 011.147-.072l.103.072 5 4a1 1 0 01-1.147 1.634l-.103-.072L8 4.28l-4.375 3.5a1 1 0 01-1.406-.156zm0 6a1 1 0 01.062-1.321l.093-.085 5-4a1 1 0 011.147-.072l.103.072 5 4a1 1 0 01-1.147 1.634l-.103-.072L8 10.28l-4.375 3.5a1 1 0 01-1.406-.156z",
  }),
);

export default class ChevronDoubleUpFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
