import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    focusable: "false",
    viewBox: "0 0 12 12",
  },
  h("path", {
    fill: "currentColor",
    d: "M5.5 1C2.46 1 0 3.46 0 6.5S2.46 12 5.5 12 11 9.54 11 6.5 8.54 1 5.5 1zm3 6H6v2.5c0 .28-.22.5-.5.5S5 9.78 5 9.5V7H2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H5V3.5c0-.28.22-.5.5-.5s.5.22.5.5V6h2.5c.28 0 .5.22.5.5s-.22.5-.5.5z",
  }),
);

export default class PlusCircleFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
