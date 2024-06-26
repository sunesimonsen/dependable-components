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
    d: "M6 0a6 6 0 106 6 6.005 6.005 0 00-6-6zm2.47 6.4L4.8 9.15a.5.5 0 01-.8-.4v-5.5a.5.5 0 01.8-.4L8.47 5.6a.508.508 0 010 .8z",
  }),
);

export default class PlayCircleFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
