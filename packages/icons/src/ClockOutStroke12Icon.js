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
    d: "M6.5 7a.5.5 0 01.5.5 1.5 1.5 0 001.356 1.493L8.5 9h1.794L9.146 7.854a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 2 2a.5.5 0 01.057.638l-.057.07-2 2a.5.5 0 01-.765-.638l.057-.07L10.292 10H8.5A2.5 2.5 0 016 7.5a.5.5 0 01.5-.5zm-2-7a4.5 4.5 0 014.244 6.001L7.664 6a3.5 3.5 0 10-2.662 1.964L5 8.972A4.5 4.5 0 114.5 0zm0 2a.5.5 0 01.492.41L5 2.5v2a.5.5 0 01-.41.492L4.5 5h-2a.5.5 0 01-.09-.992L2.5 4H4V2.5a.5.5 0 01.41-.492L4.5 2z",
  }),
);

export default class ClockOutStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
