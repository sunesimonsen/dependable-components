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
    d: "M6.5 10a.5.5 0 01.5.5 1.5 1.5 0 001.356 1.493L8.5 12l5.793-.001-1.147-1.145-.057-.07a.5.5 0 01.695-.695l.07.057 2 2 .057.07a.5.5 0 010 .568l-.057.07-2 2-.07.057a.5.5 0 01-.568 0l-.07-.057-.057-.07a.5.5 0 010-.568l.057-.07L14.293 13H8.5l-.164-.005A2.5 2.5 0 016 10.5a.5.5 0 01.5-.5zM6 0a6 6 0 013.318 11H8.5a.5.5 0 01-.493-.419A5.002 5.002 0 006 1a5 5 0 00-.977 9.905c.043.372.145.728.296 1.057A6 6 0 016 0zm.5 2a.5.5 0 01.492.41L7 2.5v4a.5.5 0 01-.41.492L6.5 7h-3a.5.5 0 01-.09-.992L3.5 6H6V2.5a.5.5 0 01.41-.492L6.5 2z",
  }),
);

export default class ClockOutStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
