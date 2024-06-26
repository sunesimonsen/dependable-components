import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M21.13 6.942v1.86a.499.499 0 01-.125.332l-2.791 3.149a.5.5 0 01-.73.021L14.86 9.663a.5.5 0 00-.805.136l-2.536 5.265a.5.5 0 01-.805.136l-1.628-1.642a.5.5 0 00-.71-.001l-2.39 2.392a.5.5 0 01-.854-.354V6.942a1 1 0 011-1h14a1 1 0 011 1m-2.828 8.261L20.256 13a.5.5 0 01.875.331v7.612a1 1 0 01-1 1h-14a1 1 0 01-1-1V19.83c0-.133.052-.26.146-.353l3.09-3.09a.5.5 0 01.707.001l2.218 2.225a.5.5 0 00.805-.136l2.537-5.267a.5.5 0 01.805-.135l2.136 2.15a.5.5 0 00.73-.02",
  }),
);

export default class LineChart26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
