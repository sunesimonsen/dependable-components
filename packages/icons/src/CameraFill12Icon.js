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
    d: "M11.09,2.55H9.42V2.4A1.66,1.66,0,0,0,7.76.74H4.21A1.66,1.66,0,0,0,2.55,2.4v.15H.91A.91.91,0,0,0,0,3.46v6.65A.91.91,0,0,0,.91,11H11.09a.91.91,0,0,0,.91-.91V3.46A.91.91,0,0,0,11.09,2.55ZM6,9.26A2.51,2.51,0,1,1,8.51,6.75,2.51,2.51,0,0,1,6,9.26ZM6,4.9A1.85,1.85,0,1,0,7.85,6.75,1.85,1.85,0,0,0,6,4.9Z",
  }),
);

export default class CameraFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
