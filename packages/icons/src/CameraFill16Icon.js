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
    d: "M14.79,3H12.56v-.2A2.22,2.22,0,0,0,10.34.59H5.62A2.22,2.22,0,0,0,3.4,2.82V3H1.21A1.21,1.21,0,0,0,0,4.23V13.1a1.21,1.21,0,0,0,1.21,1.21H14.79A1.21,1.21,0,0,0,16,13.1V4.23A1.21,1.21,0,0,0,14.79,3ZM8,12a3.35,3.35,0,1,1,3.35-3.34A3.35,3.35,0,0,1,8,12ZM8,6.15a2.47,2.47,0,1,0,2.47,2.47A2.48,2.48,0,0,0,8,6.15Z",
  }),
);

export default class CameraFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
