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
    d: "M21.7 6.87l-8.5-3.78a.467.467 0 00-.4 0L4.3 6.87a.502.502 0 00-.3.45V10c0 4.92 2.94 10.88 8.82 12.94a.555.555 0 00.36 0C19.06 20.88 22 14.92 22 10V7.32a.502.502 0 00-.3-.45zm-4.012 3.31l-5.28 6.722a.877.877 0 01-.636.332.863.863 0 01-.052.002.875.875 0 01-.62-.257l-2.72-2.72a.875.875 0 111.24-1.237l2.022 2.022 4.67-5.945a.876.876 0 011.377 1.082z",
  }),
);

export default class Security26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
