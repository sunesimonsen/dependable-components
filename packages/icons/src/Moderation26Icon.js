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
    d: "M13 17.35a1.35 1.35 0 11-.001-2.7 1.35 1.35 0 01.001 2.7zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm9-3H5a1 1 0 00-1 1v12a1 1 0 001 1h5v2.545c0 .374.47.588.8.364l4.266-2.91H21a1 1 0 001-1V6a1 1 0 00-1-1z",
  }),
);

export default class Moderation26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
