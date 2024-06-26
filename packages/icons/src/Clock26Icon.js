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
    d: "M16.443 17.145a.856.856 0 01-1.218 0L12 13.92V8.86c0-.47.39-.859.869-.859h.02c.469 0 .858.39.858.859v4.332l2.716 2.726a.856.856 0 010 1.218l-.02.01zM4 13.005A8.992 8.992 0 0013.005 22 8.99 8.99 0 0022 13.005 8.992 8.992 0 0013.005 4 8.994 8.994 0 004 13.005z",
  }),
);

export default class Clock26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
