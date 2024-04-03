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
    d: "M3.81 9.606A6.214 6.214 0 0 0 6 10c2.51 0 4.48-1.453 5.79-3.341.282-.394.28-.923.001-1.325a8.893 8.893 0 0 0-1.793-1.917l-.717.717a7.753 7.753 0 0 1 1.69 1.773.15.15 0 0 1-.001.178C9.83 7.733 8.112 9 6 9a5.17 5.17 0 0 1-1.394-.19l-.797.796ZM7.396 3.19A5.17 5.17 0 0 0 6.001 3C3.89 3 2.173 4.267 1.025 5.924a.15.15 0 0 0 .005.17 7.754 7.754 0 0 0 1.69 1.772l-.717.717A8.892 8.892 0 0 1 .21 6.666a1.142 1.142 0 0 1 0-1.32C1.518 3.455 3.49 2 6 2a6.23 6.23 0 0 1 2.193.394l-.797.797ZM5.483 7.932a2.003 2.003 0 0 0 2.45-2.45L6.708 6.707 5.483 7.932Zm-.189-2.639 1.225-1.225a2.003 2.003 0 0 0-2.45 2.45l1.225-1.225Zm5.574-3.517a.454.454 0 0 0-.58-.695l-.063.052-9.09 9.091a.455.455 0 0 0 .579.695l.063-.052 9.09-9.091Z",
  }),
);

export default class EyeHideStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
