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
    d: "M11.5 2a.5.5 0 01.492.41L12 2.5v3a.5.5 0 01-.992.09L11 5.5V3.706L6.854 7.854a.5.5 0 01-.638.057l-.07-.057L4.5 6.207.854 9.854a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 4-4a.5.5 0 01.638-.057l.07.057L6.5 6.793 10.292 3H8.5a.5.5 0 01-.492-.41L8 2.5a.5.5 0 01.41-.492L8.5 2h3z",
  }),
);

export default class ArrowTrendingStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
