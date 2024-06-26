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
    d: "M2.784 2.089l.07.057 2 2a.5.5 0 01-.638.765l-.07-.057-1.145-1.145L3 11.5a1.5 1.5 0 001.356 1.493L4.5 13h3a.5.5 0 01.09.992L7.5 14h-3a2.5 2.5 0 01-2.495-2.336L2 11.5l.001-7.793L.854 4.854a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 2-2a.5.5 0 01.638-.057zM11.5 2a2.5 2.5 0 012.495 2.336L14 4.5l-.001 7.793 1.147-1.147a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-2 2a.5.5 0 01-.638.057l-.07-.057-2-2a.5.5 0 01.638-.765l.07.057 1.145 1.145L13 4.5a1.5 1.5 0 00-1.356-1.493L11.5 3h-3a.5.5 0 01-.09-.992L8.5 2h3z",
  }),
);

export default class ArrowRetweetStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
