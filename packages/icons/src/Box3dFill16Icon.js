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
    d: "M14.47 3.42l-6-3.23a1 1 0 00-.95 0l-6 3.23c-.32.17-.52.51-.52.88v7.4c0 .37.2.71.53.88l6 3.23a1.005 1.005 0 00.95 0l6-3.23c.32-.17.52-.51.52-.88V4.3c0-.37-.2-.71-.53-.88zm-.67 1.63L8.5 7.94v6.56c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7.94L2.2 5.05a.637.637 0 01-.25-.85c.17-.3.55-.41.85-.25L8 6.79l5.2-2.84c.3-.17.68-.05.85.25.16.3.05.68-.25.85z",
  }),
);

export default class Box3dFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
