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
    d: "M22 6H4a1.003 1.003 0 00-1 1v12a1.003 1.003 0 001 1h18a1.003 1.003 0 001-1V7a1.003 1.003 0 00-1-1zm-1 6.5a.495.495 0 01-.5.5h-15a.495.495 0 01-.5-.5v-2a.495.495 0 01.5-.5h15a.495.495 0 01.5.5z",
  }),
);

export default class CreditCard26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
