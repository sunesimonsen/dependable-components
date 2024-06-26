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
    d: "M13.854 10.146l2 2a.5.5 0 010 .708l-2 2A.5.5 0 0113 14.5v-1.501L8.5 13l-.164-.005A2.5 2.5 0 016 10.5a.5.5 0 111 0 1.5 1.5 0 001.356 1.493L8.5 12l4.5-.001V10.5a.5.5 0 01.854-.354zM6 0a6 6 0 013.318 11H8.5a.5.5 0 01-.5-.5 1.5 1.5 0 00-3 0c0 .522.114 1.017.319 1.462A6 6 0 016 0zm.5 2l-.09.008a.5.5 0 00-.402.402L6 2.5V6H3.5l-.09.008a.5.5 0 000 .984L3.5 7h3l.09-.008a.5.5 0 00.402-.402L7 6.5v-4l-.008-.09A.5.5 0 006.5 2z",
  }),
);

export default class ClockOutFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
