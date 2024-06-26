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
    d: "M13 19c-2.909.037-5.398 2.035-5.98 4.8a.978.978 0 00.219.84c.2.234.5.366.813.36h9.896c.313.006.613-.126.813-.36a.98.98 0 00.218-.84c-.581-2.765-3.07-4.763-5.979-4.8zM3.833 1h18.334C23.179 1 24 1.895 24 3v12c0 1.105-.82 2-1.833 2H3.833C2.821 17 2 16.105 2 15V3c0-1.105.82-2 1.833-2zM4 3v12h18V3H4z",
  }),
);

export default class Monitor26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
