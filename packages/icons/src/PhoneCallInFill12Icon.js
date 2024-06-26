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
    d: "M7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0l2 2a1 1 0 010 1.414L4.414 5 7 7.586zM11.5 5H8c-.55 0-1-.45-1-1V.5c0-.2.12-.38.31-.46.19-.08.4-.04.54.11l4 4c.15.14.19.35.11.54-.08.19-.26.31-.46.31z",
  }),
);

export default class PhoneCallInFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
