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
    d: "M6.993 7.414L7 7.5V9h.5A1.5 1.5 0 009 7.5a.5.5 0 011 0 2.5 2.5 0 01-2.336 2.495L7.5 10H7v1.5l-.007.086a.501.501 0 01-.78.323l-.067-.055-2-2-.057-.07a.5.5 0 010-.568l.057-.07 2-2 .066-.055a.501.501 0 01.781.323zM4.5 0a4.5 4.5 0 014.244 6.001L6.414 6a1 1 0 00-.608.206l-.099.087-2.513 2.515A4.502 4.502 0 014.5 0zm0 2l-.09.008a.5.5 0 00-.402.402L4 2.5V4H2.5l-.09.008a.5.5 0 000 .984L2.5 5h2l.09-.008a.5.5 0 00.402-.402L5 4.5v-2l-.008-.09A.5.5 0 004.5 2z",
  }),
);

export default class ClockInFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
