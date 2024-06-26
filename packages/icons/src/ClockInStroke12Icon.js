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
    d: "M9.5 7a.5.5 0 01.5.5A2.5 2.5 0 017.5 10H5.707l1.147 1.146.057.07a.5.5 0 01-.765.638l-2-2-.057-.07a.5.5 0 01.057-.638l2-2 .07-.057a.5.5 0 01.638.057l.057.07a.5.5 0 01-.057.638L5.707 9H7.5l.144-.007A1.5 1.5 0 009 7.5a.5.5 0 01.5-.5zm-5-7a4.5 4.5 0 014.244 6.001L7.664 6a3.5 3.5 0 10-3.631 1.969l-.84.839A4.502 4.502 0 014.5 0zm0 2a.5.5 0 01.492.41L5 2.5v2a.5.5 0 01-.41.492L4.5 5h-2a.5.5 0 01-.09-.992L2.5 4H4V2.5a.5.5 0 01.41-.492L4.5 2z",
  }),
);

export default class ClockInStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
