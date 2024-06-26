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
    d: "M5 10c2.585 0 4.778 1.923 4.998 4.457a.5.5 0 01-.996.086C8.827 12.536 7.076 11 5 11c-2.035 0-3.825 1.597-4.002 3.545a.5.5 0 11-.996-.09C.226 11.986 2.452 10 5 10zm0-7a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4zM12.41.008L12.5 0a.5.5 0 01.492.41L13 .5V3h2.5a.5.5 0 01.09.992L15.5 4H13v2.5a.5.5 0 01-.41.492L12.5 7a.5.5 0 01-.492-.41L12 6.5V4H9.5a.5.5 0 01-.09-.992L9.5 3H12V.5a.5.5 0 01.41-.492L12.5 0z",
  }),
);

export default class UserFollowStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
