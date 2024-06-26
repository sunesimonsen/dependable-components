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
    d: "M7.385 5.168V14H0l7.385-8.832zm0-3.168c0 2.01-1.662 3.655-3.693 3.655C1.662 5.655 0 4.01 0 2h7.385zm1.23 12c0-2.01 1.662-3.655 3.693-3.655C14.338 10.345 16 11.99 16 14H8.615zm0-3.168V2H16l-7.385 8.832z",
  }),
);

export default class ZendeskStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
