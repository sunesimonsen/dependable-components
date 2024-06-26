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
    d: "M2.5 12c-.13 0-.25-.05-.35-.14l-2-1.93A.554.554 0 010 9.57V2.43c0-.13.06-.26.15-.36l2-1.93c.15-.14.36-.18.55-.1.18.08.3.26.3.46v11c0 .2-.12.38-.3.46-.07.03-.13.04-.2.04zm7-3.5c-.06 0-.13-.01-.19-.04A.499.499 0 019 8l-.01-4.06c0-.2.12-.39.31-.46.19-.08.4-.03.54.11l1.67 1.7c.38.39.38 1.02-.01 1.41L9.85 8.35a.47.47 0 01-.35.15z",
  }),
  h("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M2.5 2.5H6c.28 0 .5.22.5.5v1m-4 5.5H6c.28 0 .5-.22.5-.5V8M11 6H5",
  }),
);

export default class ExitFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
