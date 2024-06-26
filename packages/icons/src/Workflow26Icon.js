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
    d: "M6.707 8.707a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094 3-3a1 1 0 011.32-.083l.094.083L9.415 4h9.54l.22.005a5.045 5.045 0 010 10.08l-.22.004-2.629-.001-2.619 2.62a1 1 0 01-1.32.082l-.094-.083-2.62-2.619H6.956l-.174.006a2.956 2.956 0 000 5.901l.174.005H19v-2c0-.852.986-1.297 1.623-.783l.084.076 3 3a1 1 0 01.083 1.32l-.083.094-3 3c-.602.603-1.614.22-1.701-.593L19 24v-2H6.956l-.215-.005a4.956 4.956 0 010-9.902l.215-.004 2.54-.001 2.797-2.795a1 1 0 011.32-.083l.094.083 2.796 2.795h2.453l.178-.004a3.045 3.045 0 000-6.079L18.956 6H9.414L6.707 8.707z",
  }),
);

export default class Workflow26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
