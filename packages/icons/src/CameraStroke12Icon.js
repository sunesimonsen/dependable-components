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
    d: "M7.73,1.71a.67.67,0,0,1,.68.67V3.54H11v6.51H.94V3.54H3.5V2.38a.67.67,0,0,1,.67-.67H7.73m0-1H4.17A1.67,1.67,0,0,0,2.5,2.38v.16H.85a.91.91,0,0,0-.91.91v6.69a.91.91,0,0,0,.91.91H11.09a.91.91,0,0,0,.91-.91V3.45a.91.91,0,0,0-.91-.91H9.41V2.38A1.68,1.68,0,0,0,7.73.71ZM6,5.23A1.53,1.53,0,1,1,4.44,6.76,1.53,1.53,0,0,1,6,5.23m0-1A2.53,2.53,0,1,0,8.49,6.76,2.53,2.53,0,0,0,6,4.23Z",
  }),
);

export default class CameraStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
