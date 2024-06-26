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
    d: "M8 0a6.4 6.4 0 00-6.5 6.31c0 2.35 1 3.58 2.37 5.29 1.13 1.5 2.57 2.93 3.76 4.24a.5.5 0 00.73 0c1.19-1.31 2.64-2.74 3.76-4.24 1.34-1.71 2.38-2.94 2.38-5.29A6.71 6.71 0 008 0zm0 9a2.5 2.5 0 112.5-2.5A2.5 2.5 0 018 9z",
  }),
);

export default class LocationFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
