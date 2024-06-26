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
    d: "M15.5 3a.5.5 0 01.492.41L16 3.5v4a.5.5 0 01-.992.09L15 7.5V4.706L9.854 9.854a.5.5 0 01-.638.057l-.07-.057L6.5 7.207.854 12.854a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 6-6a.5.5 0 01.638-.057l.07.057L9.5 8.793 14.292 4H11.5a.5.5 0 01-.492-.41L11 3.5a.5.5 0 01.41-.492L11.5 3h4z",
  }),
);

export default class ArrowTrendingStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
