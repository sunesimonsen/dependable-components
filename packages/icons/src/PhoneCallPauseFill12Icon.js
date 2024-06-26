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
    d: "M2.707 1.293l2 2a1 1 0 010 1.414L4.414 5 7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0zM8.5 0a.5.5 0 01.492.41L9 .5v4a.5.5 0 01-.992.09L8 4.5v-4a.5.5 0 01.5-.5zm2 0a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5z",
  }),
);

export default class PhoneCallPauseFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
