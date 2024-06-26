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
    d: "M22.475 18.881l-8.891 4.925c-.525.259-.643.259-1.168 0l-8.89-4.925c-1.164-.644-.195-2.385.97-1.74L13 21.85l8.505-4.71c1.164-.645 2.133 1.096.97 1.74zm0-5l-8.891 4.925c-.525.259-.643.259-1.168 0l-8.89-4.925c-1.164-.644-.195-2.385.97-1.74L13 16.85l8.505-4.71c1.164-.645 2.133 1.096.97 1.74zM3.515 8.89a1 1 0 01-.002-1.749l9-5.015a1 1 0 01.974 0l9 5.015a1 1 0 01-.003 1.749l-9.007 4.985a1 1 0 01-.97 0L3.515 8.89z",
  }),
);

export default class Platform26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
