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
    d: "M10 5v2h1.91A5.8 5.8 0 0012 6a6.25 6.25 0 00-.09-1zM2.29 4L5.65.65a.48.48 0 01.7 0L9.71 4h1.94A6 6 0 00.35 4zM3 5h6v2H3zM2 5H.09A5.8 5.8 0 000 6a6.25 6.25 0 00.09 1H2zm6.29 3H3.71L6 10.29 8.29 8zm1.42 0l-3.36 3.35a.48.48 0 01-.7 0L2.29 8H.35a6 6 0 0011.3 0zm-6-4h4.58L6 1.71 3.71 4z",
  }),
);

export default class GlobeFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
