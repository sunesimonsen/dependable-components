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
    d: "M11.5 8.5a.5.5 0 01.5.5 2 2 0 01-1.85 1.995L10 11H8v.5a.5.5 0 01-.788.41l-.066-.056-1-1a.5.5 0 01-.057-.638l.057-.07 1-1a.5.5 0 01.847.268L8 9.5v.5h2a1 1 0 001-1 .5.5 0 01.5-.5zM4.5 0a4.5 4.5 0 014.473 5H8a3 3 0 00-2.995 2.824L5 8v.972A4.5 4.5 0 114.5 0zm6.288 5.09l.066.056 1 1a.5.5 0 01.057.638l-.057.07-1 1a.5.5 0 01-.847-.268L10 7.5V7H8a1 1 0 00-1 1 .5.5 0 01-1 0 2 2 0 011.85-1.995L8 6h2v-.5c0-.386.405-.605.717-.452l.07.043zM4.5 2l-.09.008a.5.5 0 00-.402.402L4 2.5V4H2.5l-.09.008a.5.5 0 000 .984L2.5 5h2l.09-.008a.5.5 0 00.402-.402L5 4.5v-2l-.008-.09A.5.5 0 004.5 2z",
  }),
);

export default class ClockCycleFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
