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
    d: "M10.293 10.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293zM15.5 7H10c-.55 0-1-.45-1-1V.5c0-.2.12-.38.31-.46.19-.08.4-.04.54.11l6 6c.15.14.19.35.11.54-.08.19-.26.31-.46.31z",
  }),
);

export default class PhoneCallInFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
