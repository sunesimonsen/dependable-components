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
    d: "M9.46 6.24a.48.48 0 01-.32.15L6 6.56A.51.51 0 015.44 6l.17-3.17a.48.48 0 01.15-.32L7.29 1H1.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V4.71zm-1.04-.82L7 5.5a.48.48 0 01-.5-.5l.08-1.42a.48.48 0 01.13-.32L9.84.14a.46.46 0 01.67 0l1.35 1.35a.46.46 0 010 .67L8.74 5.29a.48.48 0 01-.32.13z",
  }),
);

export default class NotesFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
