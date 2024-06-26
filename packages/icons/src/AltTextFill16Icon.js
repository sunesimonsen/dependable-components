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
    d: "M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zM3 4a2 2 0 00-1.995 1.85L1 6v5.5l.008.09a.5.5 0 00.984 0L2 11.5V9h2v2.5l.008.09a.5.5 0 00.984 0L5 11.5V6l-.005-.15A2 2 0 003 4zm4.5 0a.5.5 0 00-.492.41L7 4.5v7l.008.09a.5.5 0 00.402.402L7.5 12h2l.09-.008a.5.5 0 00.402-.402L10 11.5l-.008-.09a.5.5 0 00-.402-.402L9.5 11H8V4.5l-.008-.09A.5.5 0 007.5 4zm7 0h-4l-.09.008a.5.5 0 000 .984L10.5 5H12v6.5l.008.09a.5.5 0 00.984 0L13 11.5V5h1.5l.09-.008a.5.5 0 000-.984L14.5 4zM3 5a1 1 0 01.993.883L4 6v2H2V6l.007-.117A1 1 0 013 5z",
  }),
);

export default class AltTextFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
