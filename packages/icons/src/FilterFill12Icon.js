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
    d: "M5 11.69a.999.999 0 01-1-1V5.21L.43 1.71C.14 1.42.06.99.21.62S.73 0 1.14 0h9.73c.41 0 .77.24.92.62s.07.8-.22 1.09L8 5.21v4.48c0 .38-.21.72-.55.89l-2 1c-.14.08-.3.11-.45.11z",
  }),
);

export default class FilterFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
