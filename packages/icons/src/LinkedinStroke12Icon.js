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
    d: "M11 0a1 1 0 01.993.883L12 1v10a1 1 0 01-.883.993L11 12H1a1 1 0 01-.993-.883L0 11V1A1 1 0 01.883.007L1 0h10zm0 1H1v10h10V1zM7.742 4.63c1.502 0 1.78.988 1.78 2.273L9.52 9.52H8.04L8.037 7c-.01-.51-.098-1.065-.769-1.065-.723 0-.872.53-.888 1.109L6.378 9.52H4.897V4.75h1.422v.65h.02a1.56 1.56 0 011.403-.771zm-3.776.119V9.52H2.482V4.749h1.484zm-.741-2.372a.86.86 0 110 1.72.86.86 0 010-1.72z",
  }),
);

export default class LinkedinStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
