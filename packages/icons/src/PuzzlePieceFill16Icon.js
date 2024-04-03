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
    d: "M13.32 5.32c.82-.37 1.35-1.27 1.13-2.27-.16-.73-.77-1.34-1.5-1.5-1-.22-1.9.31-2.27 1.13L8.35.35c-.2-.2-.51-.2-.71 0l-2 2.01a.5.5 0 00.16.81C6.51 3.48 7 4.18 7 5c0 1.1-.9 2-2 2-.82 0-1.52-.49-1.83-1.2a.5.5 0 00-.81-.16L.35 7.65c-.2.2-.2.51 0 .71l2.33 2.33a1.997 1.997 0 102.64 2.64l2.33 2.33c.2.2.51.2.71 0l2.01-2.01a.5.5 0 00-.16-.81A2.009 2.009 0 019 11c0-1.1.9-2 2-2 .82 0 1.52.49 1.83 1.2a.5.5 0 00.81.16l2.01-2.01c.2-.2.2-.51 0-.71l-2.33-2.32z",
  }),
);

export default class PuzzlePieceFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
