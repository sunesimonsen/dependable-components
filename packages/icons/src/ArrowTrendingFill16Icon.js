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
    d: "M15.5 3a.5.5 0 01.492.41L16 3.5v4a.5.5 0 01-.788.41l-.066-.056-1.292-1.293-4.147 4.146a1 1 0 01-1.32.083l-.094-.083L6 8.415l-4.293 4.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 5-5a1 1 0 011.32-.083l.094.083L9 8.585l3.439-3.439-1.293-1.292a.5.5 0 01.268-.847L11.5 3h4z",
  }),
);

export default class ArrowTrendingFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
