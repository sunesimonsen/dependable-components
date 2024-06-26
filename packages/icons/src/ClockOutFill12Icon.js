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
    d: "M9.788 7.09l.066.056 2 2a.5.5 0 01.057.638l-.057.07-2 2a.5.5 0 01-.847-.268L9 11.5V10h-.5A2.5 2.5 0 016 7.5a.5.5 0 011 0 1.5 1.5 0 001.356 1.493L8.5 9H9V7.5c0-.386.405-.605.717-.452l.07.043zM4.5 0a4.5 4.5 0 014.244 6H6a1 1 0 00-.993.883L5 7v1.972A4.5 4.5 0 114.5 0zm0 2l-.09.008a.5.5 0 00-.402.402L4 2.5V4H2.5l-.09.008a.5.5 0 000 .984L2.5 5h2l.09-.008a.5.5 0 00.402-.402L5 4.5v-2l-.008-.09A.5.5 0 004.5 2z",
  }),
);

export default class ClockOutFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
