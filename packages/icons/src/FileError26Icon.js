import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 20 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M13.41 0H2a2 2 0 00-2 2v22a2 2 0 002 2h16a2 2 0 002-2V6.58L13.41 0zm.43 19.073a.541.541 0 010 .768.54.54 0 01-.767 0L10 16.77l-3.073 3.07a.541.541 0 01-.768 0 .54.54 0 010-.767L9.23 16l-3.07-3.073a.541.541 0 010-.768.54.54 0 01.767 0L10 15.23l3.073-3.073a.541.541 0 01.768 0 .54.54 0 010 .767L10.77 16l3.073 3.073zM15 7a2 2 0 01-2-2V1l6 6h-4z",
  }),
);

export default class FileError26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
