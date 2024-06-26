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
    d: "M12 13H4v1.5a1.5 1.5 0 01-3 0v-1.585A1.5 1.5 0 010 11.5v-5a1.5 1.5 0 011.145-1.458L3.035.314A.5.5 0 013.5 0h9a.5.5 0 01.464.314l1.891 4.728A1.5 1.5 0 0116 6.5v5a1.5 1.5 0 01-1 1.415V14.5a1.5 1.5 0 01-3 0V13zM5 9a1 1 0 10-2 0 1 1 0 002 0zm7-1a1 1 0 100 2 1 1 0 000-2zM2.239 5H13.76l-1.6-4H3.84l-1.6 4z",
  }),
);

export default class CarFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
