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
    d: "M3 2h.02c.023 0 .046.002.07.004L3 2a1.008 1.008 0 01.595.196c.04.03.077.061.112.097l-.09-.08.008.007.082.073 2 2C6.337 4.923 5.891 6 5 6H4v5a1 1 0 00.883.993L5 12h3a1 1 0 01.117 1.993L8 14H5a3 3 0 01-2.995-2.824L2 11V6H1C.148 6-.297 5.014.217 4.377l.076-.084 2-2 .082-.073A1.005 1.005 0 013 2zm8 0a3 3 0 012.995 2.824L14 5v5h1c.852 0 1.297.986.783 1.623l-.076.084-2 2A1.006 1.006 0 0113 14h-.032l-.054-.004L13 14a1.008 1.008 0 01-.595-.196.999.999 0 01-.112-.097l.09.08a1.006 1.006 0 01-.09-.08l-2-2C9.663 11.077 10.109 10 11 10l1-.001V5a1 1 0 00-.883-.993L11 4H8a1 1 0 01-.117-1.993L8 2h3z",
  }),
);

export default class ArrowRetweetFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
