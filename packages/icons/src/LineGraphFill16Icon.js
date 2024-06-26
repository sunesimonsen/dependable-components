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
    d: "M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13.5V14v.5zm.02-7.65l-2 3c-.23.35-.81.35-1.04 0L9.5 6.13l-3.48 5.22c-.23.35-.81.35-1.04 0L3.5 9.13l-1.48 2.22c-.12.18-.32.27-.52.27-.12 0-.24-.03-.35-.1a.626.626 0 01-.17-.87l2-3c.23-.35.81-.35 1.04 0L5.5 9.87l3.48-5.22c.23-.35.81-.35 1.04 0l2.48 3.72 1.48-2.22c.19-.29.58-.37.87-.17.28.19.36.58.17.87z",
  }),
);

export default class LineGraphFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
