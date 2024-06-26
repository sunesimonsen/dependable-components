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
    d: "M23.99 20.072c.082.49-.344.928-.878.928h-5.89a.477.477 0 01-.485-.555 2.16 2.16 0 00.001-.704 7.74 7.74 0 00-1.63-3.63c-.21-.256-.103-.618.223-.731a6.887 6.887 0 012.265-.38c3.232 0 5.914 2.194 6.394 5.072M21 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0M8 13a4 4 0 110-8 4 4 0 010 8zm-6.03 8.073c-.583 0-1.048-.518-.96-1.093A7.072 7.072 0 018 14a7.072 7.072 0 016.989 5.98c.09.575-.376 1.093-.958 1.093H1.97z",
  }),
);

export default class GroupFill26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
