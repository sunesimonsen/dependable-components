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
    d: "M10.46 9H1.54a1.001 1.001 0 01-.99-1.13c.17-1.26.69-2.07 1.47-2.3C2.1 4.18 2.63 0 6 0s3.9 4.18 3.98 5.57c.77.23 1.3 1.04 1.47 2.3.04.29-.05.58-.24.79s-.46.34-.75.34zM6 12c1.1 0 2-.9 2-2H4c0 1.1.9 2 2 2z",
  }),
);

export default class NotificationFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
