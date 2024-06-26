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
    d: "M5 10c2.585 0 4.778 1.923 4.998 4.457a.5.5 0 01-.996.086C8.827 12.536 7.076 11 5 11c-2.035 0-3.825 1.597-4.002 3.545a.5.5 0 11-.996-.09C.226 11.986 2.452 10 5 10zm0-7a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4zm5.784-2.911l.07.057L12.5 2.793l1.646-1.647a.5.5 0 01.638-.057l.07.057a.5.5 0 010 .708L13.207 3.5l1.647 1.646a.5.5 0 01-.638.765l-.07-.057L12.5 4.207l-1.646 1.647a.5.5 0 01-.638.057l-.07-.057a.5.5 0 010-.708L11.793 3.5l-1.647-1.646a.5.5 0 01.638-.765z",
  }),
);

export default class UserUnfollowStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
