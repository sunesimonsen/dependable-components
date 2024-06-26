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
    d: "M3.707 2.293l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0zM13.5 0a.5.5 0 01.492.41L14 .5v5a.5.5 0 01-.992.09L13 5.5v-5a.5.5 0 01.5-.5zm-3 0a.5.5 0 01.5.5v5a.5.5 0 11-1 0v-5a.5.5 0 01.5-.5z",
  }),
);

export default class PhoneCallPauseFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
