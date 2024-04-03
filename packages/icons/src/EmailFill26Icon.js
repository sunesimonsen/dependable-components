import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M13.14 11.949a.25.25 0 01-.302 0L6.183 6.83c-.358-.275-.155-.83.303-.83h13.028c.459 0 .661.555.303.83l-6.676 5.119zM22 9.491v9.527c0 .54-.473.982-1.05.982H5.05C4.473 20 4 19.558 4 19.018V9.49c0-.413.515-.638.85-.383l7.982 5.971a.3.3 0 00.336 0l7.981-5.971c.336-.255.851-.03.851.383",
  }),
);

export default class EmailFill26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
