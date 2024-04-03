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
    d: "M2 3v10.5C2 15.14 5.02 16 8 16s6-.86 6-2.5V3C14-.28 2-.28 2 3zm10.94 9.48c-1.08.64-2.93 1.02-4.94 1.02-2.08 0-3.96-.4-5.03-1.08a.513.513 0 01-.16-.69c.15-.23.46-.3.69-.16.91.58 2.63.93 4.5.93 1.81 0 3.51-.34 4.43-.88.23-.14.54-.06.68.18.15.23.07.54-.17.68zm0-4C11.85 9.12 10.01 9.5 8 9.5c-2.08 0-3.96-.4-5.03-1.08a.513.513 0 01-.16-.69.5.5 0 01.69-.15c.91.57 2.63.92 4.5.92 1.81 0 3.51-.34 4.43-.88.24-.14.54-.06.68.18.15.23.07.54-.17.68zm0-4C11.85 5.12 10.01 5.5 8 5.5c-2.08 0-3.96-.4-5.03-1.08a.513.513 0 01-.16-.69.5.5 0 01.69-.15c.91.57 2.63.92 4.5.92 1.81 0 3.51-.34 4.43-.88.24-.14.54-.06.68.18.15.23.07.54-.17.68z",
  }),
);

export default class DatabaseFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
