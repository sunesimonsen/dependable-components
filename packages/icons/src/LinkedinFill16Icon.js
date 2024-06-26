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
    d: "M14.815 0a1.17 1.17 0 011.176 1.026l.009.127v13.692a1.171 1.171 0 01-1.058 1.15l-.127.005H1.18a1.169 1.169 0 01-1.173-1.028L0 14.845V1.155A1.168 1.168 0 011.053.006L1.181 0h13.634zM11 5.812l-.213-.004A2.494 2.494 0 008.64 6.887l-.098.154h-.031V5.998H6.235v7.635h2.37V9.856c0-.996.19-1.96 1.424-1.96 1.006 0 1.191.777 1.225 1.547l.008.477v3.713h2.37l.002-4.188c0-1.994-.417-3.54-2.633-3.633zm-6.256.186H2.372v7.635h2.373V5.998zM3.56 2.203a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751z",
  }),
);

export default class LinkedinFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
