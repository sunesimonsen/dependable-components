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
    d: "M13.41 0H2a2 2 0 00-2 2v22a2 2 0 002 2h16a2 2 0 002-2V6.58L13.41 0zM9.5 20h-5a.5.5 0 010-1h5a.5.5 0 010 1zm0-3h-5a.5.5 0 010-1h5a.5.5 0 010 1zm0-3h-5a.5.5 0 010-1h5a.5.5 0 010 1zm0-3h-5a.5.5 0 010-1h5a.5.5 0 010 1zm6 9h-3a.5.5 0 010-1h3a.5.5 0 010 1zm0-3h-3a.5.5 0 010-1h3a.5.5 0 010 1zm0-3h-3a.5.5 0 010-1h3a.5.5 0 010 1zm0-3h-3a.5.5 0 010-1h3a.5.5 0 010 1zM15 7a2 2 0 01-2-2V1l6 6h-4z",
  }),
);

export default class FileSpreadsheet26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
