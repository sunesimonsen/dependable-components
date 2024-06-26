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
    d: "M13.41 0H2a2 2 0 00-2 2v22a2 2 0 002 2h16a2 2 0 002-2V6.58L13.41 0zM8.5 10a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 018.5 10zm6.968 10H4.473a.475.475 0 01-.377-.76l2.31-3.088a.471.471 0 01.672-.086l1.83 1.468 2.825-3.346a.529.529 0 01.844.046l3.33 4.933a.533.533 0 01-.44.833zM15 7a2 2 0 01-2-2V1l6 6h-4z",
  }),
);

export default class FileImage26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
